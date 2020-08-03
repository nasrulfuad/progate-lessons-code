-- add a WHERE clause to get rows with the category "food"
-- then group the results by the purchased_at and character_name columns

SELECT sum(price), purchased_at, character_name
FROM purchases
WHERE category = 'food'
GROUP BY purchased_at, character_name
;