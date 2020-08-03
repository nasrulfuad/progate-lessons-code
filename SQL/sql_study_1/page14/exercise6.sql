-- after "FROM purchases" add code to get a maximum of 5 rows in descending order by the "price" column

SELECT *
FROM purchases
ORDER BY price DESc LIMIT 5;