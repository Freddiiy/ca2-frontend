import dotenv from 'dotenv'


dotenv.config()

export const URL =  process.env.API_URL | "http://localhost:8080";