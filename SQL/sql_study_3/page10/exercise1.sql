SELECT *
FROM players
join countries
on players.country_id = countries.id
left join teams
on players.previous_team_id = teams.id;