-- after "FROM purchases" add code to get rows that have "10" or more in the "price" column

SELECT *
FROM purchases
where price >= 10;