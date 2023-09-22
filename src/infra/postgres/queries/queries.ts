import { POSTGRES_PRODUCTS_TABLE } from "../../../settings.js";

export function queryByIds(idsArray: string[]): string {
  return `
  SELECT * FROM ${POSTGRES_PRODUCTS_TABLE} 
  WHERE id ILIKE ANY (ARRAY['%${idsArray.join("%','%")}%'])
  `;
}
