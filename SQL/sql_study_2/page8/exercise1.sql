-- get the total purchases by purchased_at and character_name

SELECT sum(price), purchased_at, character_name
FROM purchases
GROUP BY purchased_at, character_name
;
