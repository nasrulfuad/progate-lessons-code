SELECT name,goals
FROM players
where goals > (
  select avg(goals) from players
);