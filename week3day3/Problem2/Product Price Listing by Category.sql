SELECT P.product_name,B.brand_name,C.category_name,P.model_year,P.list_price FROM products P
INNER JOIN brands B
ON P.brand_id = B.brand_id
INNER JOIN categories C
ON P.category_id = C.category_id


SELECT P.product_name,B.brand_name,C.category_name,P.model_year,P.list_price FROM products P
INNER JOIN brands B
ON P.brand_id = B.brand_id
INNER JOIN categories C
ON P.category_id = C.category_id  WHERE P.list_price > 500




SELECT P.product_name,B.brand_name,C.category_name,P.model_year,P.list_price FROM products P
INNER JOIN brands B
ON P.brand_id = B.brand_id
INNER JOIN categories C
ON P.category_id = C.category_id  WHERE P.list_price > 500 ORDER BY P.list_price ASC;