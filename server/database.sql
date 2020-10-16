CREATE TABLE "motp" (
"id" serial primary key,
"body" text,
"graphic" text,
"page#" INT not null,
"nextPage#" INT not null
);

INSERT INTO "motp" ("body", "graphic", "page#", "nextPage#")
VALUES ('Lucky Kid! How many kids have a famouse scientist for a father?', 'no graphic', 2, 3);

INSERT INTO "motp" ("body", "graphic", "page#", "nextPage#")
VALUES ('Three men are standing at the door', 'no graphic', 3, 9);

INSERT INTO "motp" ("body", "graphic", "page#", "nextPage#")
VALUES ('You don/t have to be any scientific genius to know what Crim is really there for', 'no graphic', 9, 14);