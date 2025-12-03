// Simple in-memory store for hackathon demo purposes

let users = [];
let idSeq = 1;

export function findUserByTelegramId(telegramId) {
  return users.find((u) => u.telegramId === String(telegramId));
}

export function findUserById(id) {
  return users.find((u) => u.id === String(id));
}

export function insertUser(partial) {
  const user = {
    id: String(idSeq++),
    telegramId: '',
    username: null,
    firstName: null,
    lastName: null,
    photoUrl: null,
    createdAt: new Date().toISOString(),
    ...partial,
  };
  users.push(user);
  return user;
}

export function updateUserById(id, patch) {
  const idx = users.findIndex((u) => u.id === String(id));
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...patch };
  return users[idx];
}

export function upsertUserByTelegramRepo({ telegramId, ...rest }) {
  let user = findUserByTelegramId(telegramId);
  if (!user) {
    user = insertUser({ telegramId, ...rest });
  } else {
    user = updateUserById(user.id, { ...rest });
  }
  return user;
}

// helper to reset in tests
export function __resetStore() {
  users = [];
  idSeq = 1;
}
