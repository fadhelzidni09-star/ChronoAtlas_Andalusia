import { usingRedis } from '../lib/store.js';
export default function handler(req, res) {
  res.status(200).json({ ok: true, storage: usingRedis ? 'redis' : 'memory (data hilang saat restart)' });
}
