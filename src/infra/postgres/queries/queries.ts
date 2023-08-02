import { POSTGRES_PRODUCTS_TABLE } from "../../../settings.js"


export const fofinhoQuery = `
  SELECT * FROM ${POSTGRES_PRODUCTS_TABLE} 
  WHERE category ILIKE '%pet shop%' AND 
  title ilike ANY (
    ARRAY['%pulga%', '%ração%','%tapete%', '%higien%', '%areia%','%shampoo%']
  ) AND
  discount > 0;
`

export const thunderQuery = `
WITH pt AS
  (
    SELECT *
    FROM items WHERE category ILIKE ANY (ARRAY['%saúde%', '%bem-estar%', '%eletrônico%', '%cozinha%', '%alimentos%', '%automotivo%', '%casa%', '%jardim%', '%limpeza%', '%games%', '%consoles%', '%informática%', '%computador%'])
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
    UNION
    SELECT *
    FROM items WHERE category ILIKE '%livro%'
    AND REVIEWS > 1500
    AND discount >= 20
  )
  SELECT * FROM pt WHERE 
  category NOT ILIKE '%moda%'
`
