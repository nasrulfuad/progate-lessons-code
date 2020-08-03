-- get all products with a price higher than the price of "grey hoodie"
select name, price from items where price > (select price from items where name = 'grey hoodie');