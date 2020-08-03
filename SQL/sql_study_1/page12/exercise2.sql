-- after WHERE character_name = "Ken the Ninja", add code to put rows in ascending order by the "price" column

SELECT *
FROM purchases
WHERE character_name = "Ken the Ninja"
ORDER BY price ASC;