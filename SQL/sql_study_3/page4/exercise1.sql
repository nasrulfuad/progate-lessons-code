SELECT *
FROM countries
WHERE rank < (
  select rank from countries where name = 'Japan'
)
;