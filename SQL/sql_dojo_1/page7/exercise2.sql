-- get the total sales and total profit for the entire site
SELECT sum(items.price) as 'total sales', sum(items.price - items.cost) as 'total profit'
FROM sales_records
JOIN items
ON sales_records.item_id = items.id
