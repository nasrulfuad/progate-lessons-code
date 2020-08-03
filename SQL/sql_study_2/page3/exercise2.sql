-- get the sum total of the price column where the character_name is "Ken the Ninja"

SELECT sum(price)
FROM purchases
where character_name = 'Ken the Ninja';