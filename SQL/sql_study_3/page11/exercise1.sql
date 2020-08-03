SELECT name as 'player name', height as 'height'
FROM players
where height > (
  select avg(height) from players
);