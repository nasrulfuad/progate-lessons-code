SELECT *
FROM players
left join teams
on players.previous_team_id = teams.id;