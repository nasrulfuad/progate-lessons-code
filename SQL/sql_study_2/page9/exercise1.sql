-- add a condition in the WHERE clause to group by
-- rows for which the character_name is "Ken the Ninja"

SELECT sum(price), purchased_at
FROM purchases
WHERE character_name = 'Ken the Ninja'
GROUP BY purchased_at
;