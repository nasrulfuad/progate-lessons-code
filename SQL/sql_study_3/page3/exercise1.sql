-- Use AS to name the column "180 cm or taller"
SELECT name as '180 cm or taller'
FROM players
where height >= 180;