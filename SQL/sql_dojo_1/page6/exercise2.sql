-- get the id and number of units sold of the top 5 most purchased items
select item_id, count(*) from sales_records group by item_id order by count(*) desc limit 5;