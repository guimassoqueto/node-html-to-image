import 'dotenv/config'

export const POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT as string) ?? 5432
export const POSTGRES_DB = process.env.POSTGRES_DB ?? "postgres"
export const POSTGRES_USER = process.env.POSTGRES_USER ?? "postgres"
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD ?? "password"
export const POSTGRES_HOST = process.env.POSTGRES_HOST ?? "localhost"
export const POSTGRES_PRODUCTS_TABLE = process.env.POSTGRES_PRODUCTS_TABLE ?? "error"
export const POSTGRES_LAST_SCRAP_TABLE = process.env.POSTGRES_LAST_SCRAP_TABLE ?? "error"

export const FOFINHO_SCREENSHOTS_FOLDER = process.env.FOFINHO_SCREENSHOTS_FOLDER ?? "./screenshots"
export const THUNDER_SCREENSHOTS_FOLDER = process.env.THUNDER_SCREENSHOTS_FOLDER ?? "./screenshots"
export const KADEC_SCREENSHOTS_FOLDER = process.env.KADEC_SCREENSHOTS_FOLDER ?? "./screenshots"

export const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER ?? "user"
export const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS ?? "password"
export const RABBITMQ_DEFAULT_HOST = process.env.RABBITMQ_DEFAULT_HOST ?? "localhost"
export const RABBITMQ_RECEIVER_QUEUE = process.env.RABBITMQ_RECEIVER_QUEUE ?? "colly-puppet"
export const RABBITMQ_URL = `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_DEFAULT_HOST}:5672`