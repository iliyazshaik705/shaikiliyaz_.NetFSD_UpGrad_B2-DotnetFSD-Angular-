

--1A
create procedure total_Sales_Amount 
AS
BEGIN
	select order_id,sum(quantity*list_price) as 'total_Sales' from order_items group by order_id
END

exec total_Sales_Amount

--1B

create procedure date_range
@date1 date,
@date2 date
AS
Begin
select * from orders where order_date>@date1 and order_date<@date2
end

exec date_range '2016-12-12','2018-12-12'

--1C
CREATE PROCEDURE total_price
    @discount INT,
    @final_price_after_discount DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT 
        @final_price_after_discount = 
        SUM(list_price - (list_price * @discount / 100.0))
    FROM order_items
    WHERE order_id = 1
END
DECLARE @final_price DECIMAL(10,2)

EXEC total_price
    @discount = 10,
    @final_price_after_discount = @final_price OUTPUT

SELECT @final_price AS Final_price

--1D
create function top5_selling_products()
returns @bestSalesProducts table(
	product_id int,
	no_of_sales int
)
AS 
BEGIN
	insert into @bestSalesProducts
	select top 5 product_id,count(product_id) as 'no_of_sales' from order_items group by product_id order by count(product_id) desc
	return
END

select * from dbo.top5_selling_products()