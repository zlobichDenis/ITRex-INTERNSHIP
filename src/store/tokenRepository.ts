
export const setToken = (token: string): void => localStorage.setItem('access_token', token);
export const setRefreshToken = (token: string): void => localStorage.setItem('refresh_token', token);

export const getToken = (): string | null => localStorage.getItem('access_token');
export const getRefreshToken = (): string | null => localStorage.getItem('refresh_token');
