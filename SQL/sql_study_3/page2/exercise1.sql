SELECT name
FROM players
WHERE goals > (
  -- Write an SQL statement below to get Will's score
  SELECT goals
  FROM players
  WHERE name = 'Will'
)
;