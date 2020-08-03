SELECT players.name, countries.name
FROM players
join countries on players.country_id = countries.id;