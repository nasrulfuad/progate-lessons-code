-- after "FROM purchases" add code to get rows with "food" in the "category" column

SELECT *
FROM purchases
where category = 'food';