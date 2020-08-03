-- after "FROM purchases" add code to get all rows for which the "name" column starts with "pudding"

SELECT *
FROM purchases
where name like 'pudding%';