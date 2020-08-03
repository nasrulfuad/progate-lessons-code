-- get the number of purchases for each purchased_at group

SELECT count(*), purchased_at
FROM purchases
group by purchased_at
;