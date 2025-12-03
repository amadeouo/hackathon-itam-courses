import {
  findUserByTelegramId,
  upsertUserByTelegramRepo,
} from '../../db/memory.store.js';

export async function getUserByTelegramId(telegramId) {
  return findUserByTelegramId(String(telegramId));
}

export async function upsertUserByTelegram({ telegramId, username, firstName, lastName, photoUrl }) {
  return upsertUserByTelegramRepo({ telegramId: String(telegramId), username, firstName, lastName, photoUrl });
}
