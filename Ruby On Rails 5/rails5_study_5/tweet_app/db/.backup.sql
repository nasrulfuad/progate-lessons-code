PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
INSERT INTO schema_migrations VALUES('20170331045923');
CREATE TABLE IF NOT EXISTS "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
INSERT INTO ar_internal_metadata VALUES('environment','development','2017-03-31 05:21:00.324397','2017-03-31 05:21:00.324397');
CREATE TABLE IF NOT EXISTS "posts" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
INSERT INTO posts VALUES(1,'Looking for a good book to read.','2017-03-31 05:24:15.529063','2017-03-31 05:24:15.529063');
INSERT INTO posts VALUES(2,'Today''s lunch was great!','2017-03-31 05:24:32.004378','2017-03-31 05:24:32.004378');
INSERT INTO posts VALUES(3,'Need to review what I learned today!','2020-06-26 11:59:26.305168','2020-06-26 11:59:26.305168');
INSERT INTO posts VALUES(4,'Oke','2020-06-26 12:01:03.331550','2020-06-26 12:14:19.763610');
INSERT INTO posts VALUES(5,replace(replace('\r\nTweetApp\r\n\r\n    About\r\n    Posts\r\n    New post\r\n\r\nEdit a post\r\nContent can''t be blank\r\n','\r',char(13)),'\n',char(10)),'2020-06-26 12:24:40.017578','2020-06-26 12:25:02.913163');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('posts',5);
COMMIT;
