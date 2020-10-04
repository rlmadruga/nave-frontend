export const TOKEN = "token";
export const auth = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => localStorage.getItem(TOKEN);
export const setLogin = (token) => localStorage.setItem(TOKEN, token);
export const removeLogout = () => localStorage.removeItem(TOKEN);
