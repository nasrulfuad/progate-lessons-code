-- get the number of sales and date for each day
select purchased_at, count(*) as 'sales' from sales_records group by purchased_at;