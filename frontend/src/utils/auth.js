export const auth = {
  getToken() {
    return localStorage.getItem('token') || '';
  },
  setToken(token) {
    if (token) localStorage.setItem('token', token);
  },
  clear() {
    localStorage.removeItem('token');
  },
  isAuthed() {
    return Boolean(localStorage.getItem('token'));
  },
};
