// Penyimpanan data: Upstash Redis (produksi) atau memori (pengembangan lokal).
const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const redis = url && token
  ? new (await import('@upstash/redis')).Redis({ url, token })
  : null;

const mem = globalThis.__chronoMem || (globalThis.__chronoMem = { kv: new Map(), lists: new Map() });

export const usingRedis = !!redis;

export async function getJSON(key) {
  if (redis) return (await redis.get(key)) ?? null;
  return mem.kv.has(key) ? JSON.parse(mem.kv.get(key)) : null;
}

export async function setJSON(key, value) {
  if (redis) return redis.set(key, value);
  mem.kv.set(key, JSON.stringify(value));
}

export async function pushList(key, value, max = 2000) {
  if (redis) {
    await redis.lpush(key, value);
    return redis.ltrim(key, 0, max - 1);
  }
  const l = mem.lists.get(key) || [];
  l.unshift(JSON.parse(JSON.stringify(value)));
  mem.lists.set(key, l.slice(0, max));
}

export async function readList(key, max = 500) {
  if (redis) return (await redis.lrange(key, 0, max - 1)) || [];
  return (mem.lists.get(key) || []).slice(0, max);
}
