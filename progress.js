import { getJSON, setJSON } from '../lib/store.js';
import { cors, clean } from '../lib/http.js';

const ID_RE = /^[a-zA-Z0-9-]{8,64}$/;

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method === 'GET') {
    const id = String(req.query.id || '');
    if (!ID_RE.test(id)) return res.status(400).json({ error: 'id tidak valid' });
    const data = await getJSON(`progress:${id}`);
    return res.status(200).json({ explored: data?.explored || [] });
  }

  if (req.method === 'POST') {
    const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    if (!ID_RE.test(String(b.id || ''))) return res.status(400).json({ error: 'id tidak valid' });
    if (!Array.isArray(b.explored)) return res.status(400).json({ error: 'explored harus array' });
    const explored = [...new Set(b.explored.map((x) => clean(x, 30)).filter(Boolean))].slice(0, 40);
    await setJSON(`progress:${b.id}`, { explored, at: new Date().toISOString() });
    return res.status(200).json({ ok: true, explored });
  }

  res.setHeader('Allow', 'GET,POST');
  res.status(405).json({ error: 'Metode tidak diizinkan' });
}
