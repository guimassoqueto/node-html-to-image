import { QueryResult } from "pg";
import { ProductModel } from "../../domain/models/product-model.js";
import { pool } from "./pool.js";

export class PostgresRepository {
  static async loadProducts(query: string): Promise<ProductModel[]> {
    const queryResult = await pool.query(query)
    return mapper(queryResult)
  }
}

function mapper(queryResult: QueryResult<any>): ProductModel[] {
  const { rows } = queryResult
  const products: ProductModel[] = rows.map((row) => {
    const product: ProductModel = {
      id: row.id,
      url: row.url,
      afiliate_url: row.afiliate_url,
      title: row.title,
      category: row.category,
      reviews: row.reviews,
      free_shipping: row.free_shipping,
      image_url: row.image_url,
      price: row.price,
      previous_price: row.previous_price,
      discount: row.discount,
      created_at: row.created_at,
      updated_at: row.updated_at
    };
    return product
  });
  return products
}