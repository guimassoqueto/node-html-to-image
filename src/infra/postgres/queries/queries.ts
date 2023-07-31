import { pool } from '../../postgres/pool.js'
import { QueryResult } from "pg"
import { Product } from "../../../types/product.js"
import { formatProducts } from '../../../helpers/format-products.js'
import moment from 'moment'

export class ScrapyLastExecution {
  static async getDatetime(): Promise<string> {
    const result = await pool.query(`SELECT datetime from executions ORDER BY datetime DESC LIMIT 1;`)
    const datetime = result.rows[0]['datetime'] as Date
    return moment(datetime).format('YYYY-MM-DD HH:mm:ss.000 -0300')
  }
}

export class PromoThunderQueries {
  static async getProducts(datetime: string): Promise<Product[]> {
    const queryResult: QueryResult<Product> = await pool.query(`
      WITH pt AS
      (
        SELECT *
        FROM items WHERE category ILIKE ANY (ARRAY['%saúde%', '%bem-estar%', '%eletrônico%', '%tecnologia%', '%pet shop%', '%cozinha%', '%alimentos%', '%automotivo%','%bolsas%', '%casa%', '%jardim%', '%limpeza%', '%games%', '%consoles%', '%echo%', '%smartphone%', '%informática%', '%computador%', '%livro%'])
        AND reviews > 500
        AND discount >= 20
        UNION
        SELECT *
        FROM items  WHERE category ILIKE ANY (ARRAY['%beleza%', '%bebê%', '%higiene%', '%celulares%', '%smartphone%'])
        AND reviews > 500
        AND discount >= 10
        UNION
        SELECT *
        FROM items  WHERE category = ''
        AND reviews > 500
        AND discount >= 10
      )
      SELECT * FROM pt WHERE 
      category NOT ILIKE '%moda%'   
      AND created_at BETWEEN '${datetime}' AND NOW();
    `)
    return formatProducts(queryResult)
  }
}
