SELECT sum(goals), country_id
FROM players
group by country_id;