SELECT S.store_name,SUM(OI.quantity * OI.list_price * (1 - OI.discount)) AS total_sales
FROM stores S
INNER JOIN orders O
ON S.store_id = O.store_id
INNER JOIN order_items OI
ON O.order_id = OI.order_id


WHERE O.order_status = 4
GROUP BY S.store_name
ORDER BY total_sales DESC;