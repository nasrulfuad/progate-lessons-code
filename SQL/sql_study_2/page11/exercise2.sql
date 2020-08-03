-- make a group for each character, then get the sum of the price column and the character_name column
-- but, aggregate only where the category column is "other"

SELECT sum(price), character_name
FROM purchases
WHERE category = 'other'
group by character_name
;