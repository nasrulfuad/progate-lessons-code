-- after WHERE character_name = "Ken the Ninja", add code to get a result of a maximum of 10 rows

SELECT *
FROM purchases
WHERE character_name = "Ken the Ninja"
limit 10;