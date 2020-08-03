SELECT players.name as 'player name', teams.name as 'team (last year)'
FROM players
join teams
on players.previous_team_id = teams.id;