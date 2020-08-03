-- get the name and profit of the products the top 5 highest profit values
select name, (price - cost) from items order by (price - cost) desc limit 5;