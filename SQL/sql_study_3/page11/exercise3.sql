SELECT countries.name as 'country name', AVG(goals) as 'average score'
FROM players

join countries on players.country_id = countries.id

GROUP BY countries.name;