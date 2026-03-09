
CREATE TRIGGER trg_update_stock_after_insert
ON order_items
AFTER INSERT
AS
BEGIN
    BEGIN TRY

        DECLARE @product_id INT
        DECLARE @quantity INT
        DECLARE @order_id INT
        DECLARE @store_id INT
        DECLARE @current_stock INT

        -- Get inserted values
        SELECT 
            @product_id = product_id,
            @quantity = quantity,
            @order_id = order_id
        FROM inserted;

        -- Get store id from orders table
        SELECT @store_id = store_id
        FROM orders
        WHERE order_id = @order_id;

        -- Get current stock
        SELECT @current_stock = quantity
        FROM stocks
        WHERE product_id = @product_id
        AND store_id = @store_id;

        -- Check stock availability
        IF @current_stock < @quantity
        BEGIN
            RAISERROR ('Stock is insufficient for this order',16,1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

        -- Update stock
        UPDATE stocks
        SET quantity = quantity - @quantity
        WHERE product_id = @product_id
        AND store_id = @store_id;

    END TRY

    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END
GO

-- test the trigger
INSERT INTO order_items( item_id,order_id,  product_id, quantity, list_price)
VALUES (30, 101, 5, 3, 200);

-- check updated stock
SELECT * 
FROM stocks
WHERE product_id = 5;