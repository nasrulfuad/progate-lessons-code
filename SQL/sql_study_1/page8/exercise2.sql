-- after "FROM purchases" add code to get all rows for which the "name" column ends with "pudding"

SELECT *
FROM purchases
where name like '%pudding';