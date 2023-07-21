export function basicQuery(timestamp: string): string {
  return `
    WITH pt AS
    (
      SELECT *
      FROM products WHERE category ILIKE ANY (ARRAY['%eletrônico%', '%tecnologia%', '%pet shop%', '%cozinha%', '%alimentos%', '%automotivo%','%bolsas%', '%casa%', '%jardim%', '%limpeza%', '%games%', '%consoles%', '%echo%', '%smartphone%', '%informática%', '%computador%'])
      AND reviews > 100
      AND discount >= 20
      UNION
      SELECT *
      FROM products  WHERE category ILIKE ANY (ARRAY['%beleza%', '%bebê%', '%higiene%'])
      AND reviews > 100
      AND discount >= 10
    )
    SELECT * FROM pt
    WHERE created_at BETWEEN '${timestamp}' AND NOW();
  `;
}

export function basicQuery2(timestamp: string): string {
  return `
    SELECT * FROM products;
  `;
}
