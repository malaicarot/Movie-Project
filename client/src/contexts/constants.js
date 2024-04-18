export const API_URL = process.env.NODE_ENV !== 'production' ? `http://localhost:${1115 || 8080}` : ''

export const LOCAL_STORAGE_TOKEN_NAME = 'movie_token'