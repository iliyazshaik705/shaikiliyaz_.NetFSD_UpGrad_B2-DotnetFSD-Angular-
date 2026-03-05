select P.product_name,S.store_name, ST.quantity as Available_Stock, SUM(OI.quantity) AS total_quantity_sold
From stocks ST inner join products P on ST.product_id = P.product_id
inner join stores S on ST.store_id = S.store_id
left join order_items OI on P.product_id = OI.product_id
group by P.product_name,S.Store_name,ST.quantity order  by P.product_name