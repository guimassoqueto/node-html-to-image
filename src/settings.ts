import 'dotenv/config'

export const POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT as string) ?? 5432
export const POSTGRES_DB = process.env.POSTGRES_DB ?? "postgres"
export const POSTGRES_USER = process.env.POSTGRES_USER ?? "postgres"
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD ?? "password"
export const POSTGRES_HOST = process.env.POSTGRES_HOST ?? "localhost"
export const TEMP_FOLDER = process.env.TEMP_FOLDER!
export const SCREENSHOTS_FOLDER = process.env.SCREENSHOTS_FOLDER ?? "./screenshots"
