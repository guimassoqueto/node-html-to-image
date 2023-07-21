import pkg from 'pg';
import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER} from '../../settings.js'
const { Pool } = pkg;

export const pool = new Pool({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  port: POSTGRES_PORT,
  max: 20,
  idleTimeoutMillis: 10,
  connectionTimeoutMillis: 1000,
})