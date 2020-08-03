-- after "FROM purchases" add code to get rows where the "category" column is "food"
-- and the "character_name" column is "Master White"

SELECT *
FROM purchases
where category = 'food'
and 
character_name = 'Master White';