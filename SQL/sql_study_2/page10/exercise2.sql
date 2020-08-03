-- get the total by date and character where the total is greater than 30

SELECT sum(price), purchased_at, character_name
FROM purchases
GROUP BY purchased_at, character_name
HAVING sum(price) > 30
;
