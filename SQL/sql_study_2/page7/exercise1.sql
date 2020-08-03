-- get the total amount of money spent for each purchased_at group

SELECT sum(price), purchased_at
FROM purchases
group by purchased_at
;