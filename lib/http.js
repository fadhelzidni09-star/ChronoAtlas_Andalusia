import { timingSafeEqual } from 'node:crypto';

export function cors(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-teacher-key');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') { res.status(204).end(); return true; }
  return false;
}

export function allow(req, res, method) {
  if (req.method !== method) {
    res.setHeader('Allow', method);
    res.status(405).json({ error: 'Metode tidak diizinkan' });
    return false;
  }
  return true;
}

export function isTeacher(req) {
  const real = process.env.TEACHER_KEY;
  if (!real) return null; // belum dikonfigurasi
  const got = String(req.headers['x-teacher-key'] || '');
  const a = Buffer.from(got), b = Buffer.from(real);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const clean = (v, max) =>
  String(v ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max);
