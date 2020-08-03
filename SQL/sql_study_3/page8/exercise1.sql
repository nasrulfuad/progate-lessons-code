SELECT *
FROM players
join teams
on players.previous_team_id = teams.id;