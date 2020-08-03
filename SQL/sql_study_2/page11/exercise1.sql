-- group by category, then get the sum of the price column
-- and the category column for each group

SELECT sum(price), category
FROM purchases
group by category
;