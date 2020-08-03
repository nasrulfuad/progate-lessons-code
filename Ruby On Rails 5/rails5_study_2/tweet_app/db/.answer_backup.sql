PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
INSERT INTO "schema_migrations" VALUES('20170215053008');
CREATE TABLE "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
INSERT INTO "ar_internal_metadata" VALUES('environment','development','2017-03-15 05:46:29.611676','2017-03-15 05:46:29.611676');
CREATE TABLE "posts" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
INSERT INTO "posts" VALUES(1,'Learning Rails with Progate!','2017-03-15 05:54:03.539962','2017-03-15 05:54:03.539962');
INSERT INTO "posts" VALUES(2,'Trying to display the posts!','2017-03-15 05:54:35.782479','2017-03-15 05:54:35.782479');
INSERT INTO "posts" VALUES(3,'Learning to code is so much fun!','2017-03-15 05:54:35.782479','2017-03-15 05:54:35.782479');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('posts',3);
COMMIT;

