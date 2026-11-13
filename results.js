import { readList } from '../lib/store.js';
import { cors, allow, isTeacher } from '../lib/http.js';

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (!allow(req, res, 'GET')) return;
  const ok = isTeacher(req);
  if (ok === null) return res.status(503).json({ error: 'TEACHER_KEY belum diatur di server' });
  if (!ok) return res.status(401).json({ error: 'Kunci guru salah' });
  res.status(200).json({ results: await readList('quiz:results', 500) });
}
