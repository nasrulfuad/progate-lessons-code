SELECT *
FROM players
-- Add a name to the combined table 
JOIN countries
-- Add a join condition
ON players.country_id = countries.id;