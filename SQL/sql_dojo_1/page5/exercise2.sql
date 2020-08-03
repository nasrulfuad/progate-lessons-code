-- Get all products with profits that are more than the profit of a gray hoodie and prices that are less than or equal to 70 USD.
select name, (price - cost)
from items
where price < 70
and (price - cost) > (select (price - cost) from items where name = 'grey hoodie');