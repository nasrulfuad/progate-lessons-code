-- after "FROM purchases" add code to rows with a date of "2018-11-01" or earlier in the "purchased_at" column

SELECT *
FROM purchases
where purchased_at <= '2018-11-01';