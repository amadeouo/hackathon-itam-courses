import crypto from 'crypto';

export function verifyTelegramAuth(payload, botToken, maxAgeSec = 120) {
  if (!botToken) return { ok: false, reason: 'NO_BOT_TOKEN' };
  if (!payload || typeof payload !== 'object') return { ok: false, reason: 'NO_PAYLOAD' };

  // Верифицируем присланный Telegram payload согласно докам:
  // data_check_string должен включать ВСЕ поля, КРОМЕ hash, отсортированные по ключу,
  // в том числе ОБЯЗАТЕЛЬНО auth_date. Ранее auth_date исключался — из-за этого подпись не совпадала.
  const { hash, ...rest } = payload;
  if (!hash) return { ok: false, reason: 'NO_HASH' };
  if (!payload.auth_date) return { ok: false, reason: 'NO_AUTH_DATE' };

  const dataCheckString = Object.keys(rest)
    .sort()
    .map((k) => `${k}=${rest[k]}`)
    .join('\n');

  const secretKey = crypto.createHash('sha256').update(botToken).digest();
  const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  if (hmac !== hash) return { ok: false, reason: 'BAD_SIGNATURE' };

  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - Number(payload.auth_date)) > maxAgeSec) return { ok: false, reason: 'EXPIRED' };

  return { ok: true };
}
