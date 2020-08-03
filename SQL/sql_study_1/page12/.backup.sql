PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "purchases" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "price" integer, "character_name" varchar, "category" varchar, "purchased_at" date);
INSERT INTO purchases VALUES(1,'smartphone case','15','Ken the Ninja','other','2018-10-10');
INSERT INTO purchases VALUES(2,'box lunch','5','Master White','food','2018-10-10');
INSERT INTO purchases VALUES(3,'dress','30','Birdie','other','2018-10-10');
INSERT INTO purchases VALUES(4,'textbook','20','Ken the Ninja','other','2018-10-10');
INSERT INTO purchases VALUES(5,'train fair','5','Master White','travel','2018-10-10');
INSERT INTO purchases VALUES(6,'pudding','2','Ken the Ninja','food','2018-10-11');
INSERT INTO purchases VALUES(7,'soccer ball','25','Baby Ben','other','2018-10-11');
INSERT INTO purchases VALUES(8,'calculator','7','Master White','other','2018-10-13');
INSERT INTO purchases VALUES(9,'box lunch','10','Ken the Ninja','food','2018-10-13');
INSERT INTO purchases VALUES(10,'pudding parfait','5','Ken the Ninja','food','2018-10-13');
INSERT INTO purchases VALUES(11,'taxi fare','12','Birdie','travel','2018-10-17');
INSERT INTO purchases VALUES(12,'cotton candy','1','Baby Ben','food','2018-10-18');
INSERT INTO purchases VALUES(13,'glasses','50','Master White','other','2018-10-18');
INSERT INTO purchases VALUES(14,'baked pudding','2','Ken the Ninja','food','2018-10-18');
INSERT INTO purchases VALUES(15,'purse','80','Birdie','other','2018-10-20');
INSERT INTO purchases VALUES(16,'soy milk cookies','3','Birdie','food','2018-10-20');
INSERT INTO purchases VALUES(17,'sandwich','6','Ken the Ninja','food','2018-10-20');
INSERT INTO purchases VALUES(18,'grilled fish set','6','Master White','food','2018-10-20');
INSERT INTO purchases VALUES(19,'notebook','2','Baby Ben','other','2018-10-21');
INSERT INTO purchases VALUES(20,'pencil','1','Baby Ben','other','2018-10-24');
INSERT INTO purchases VALUES(21,'blush','8','Birdie','other','2018-10-24');
INSERT INTO purchases VALUES(22,'parking fee','2','Ken the Ninja','travel','2018-10-28');
INSERT INTO purchases VALUES(23,'butter','2','Master White','food','2018-10-28');
INSERT INTO purchases VALUES(24,'potatoes','1','Master White','food','2018-10-28');
INSERT INTO purchases VALUES(25,'milk pudding','1','Ken the Ninja','food','2018-10-28');
INSERT INTO purchases VALUES(26,'bus fare','2','Master White','travel','2018-11-02');
INSERT INTO purchases VALUES(27,'pancakes','8','Birdie','food','2018-11-02');
INSERT INTO purchases VALUES(28,'baked pudding mochi','1','Ken the Ninja','food','2018-11-03');
INSERT INTO purchases VALUES(29,'electronics kit','54','Ken the Ninja','other','2018-11-07');
INSERT INTO purchases VALUES(30,'fabric softener','6','Birdie','other','2018-11-07');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('purchases',30);
COMMIT;



