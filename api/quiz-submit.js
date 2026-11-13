import { pushList } from '../lib/store.js';
import { cors, allow, clean } from '../lib/http.js';

// Kunci jawaban disimpan di server (sama dengan urutan soal di index.html)
const KEY = [1, 0, 2];

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (!allow(req, res, 'POST')) return;

  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const answers = Array.isArray(b.answers) ? b.answers : [];
  if (answers.length !== KEY.length || !answers.every((x) => Number.isInteger(x) && x >= 0 && x <= 2)) {
    return res.status(400).json({ error: 'Jawaban tidak valid' });
  }

  const score = answers.reduce((s, a, i) => s + (a === KEY[i] ? 1 : 0), 0);
  const record = {
    name: clean(b.name, 40) || 'Anonim',
    kelas: clean(b.kelas, 20) || '-',
    score,
    total: KEY.length,
    percent: Math.round((score / KEY.length) * 100),
    answers,
    at: new Date().toISOString(),
  };
  await pushList('quiz:results', record);
  res.status(200).json({ score, total: record.total, percent: record.percent });
}
