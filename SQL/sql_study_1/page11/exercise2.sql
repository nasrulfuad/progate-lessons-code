-- after "FROM purchases" add code to get rows where the "category" column is "food"
-- or the "character_name" column name is "Ken the Ninja"


SELECT *
FROM purchases
where category = 'food'
or 
character_name = 'Ken the Ninja';