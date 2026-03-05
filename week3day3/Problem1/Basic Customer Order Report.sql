Select first_name,last_name,order_id,order_date,order_status From customers C 
inner join orders O on C.customer_id = O.customer_id

Select first_name,last_name,order_id,order_date,order_status From customers C 
inner join orders O on C.customer_id = O.customer_id where O.order_status=1 or O.order_status=4 --(O.order_status IN (1,4);

Select first_name,last_name,order_id,order_date,order_status From customers C 
inner join orders O on C.customer_id = O.customer_id where O.order_status=1 or O.order_status=4 
order by O.order_date desc

