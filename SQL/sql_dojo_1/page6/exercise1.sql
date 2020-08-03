-- get the number of sales for each item by item id
select item_id, count(*) from sales_records group by item_id;