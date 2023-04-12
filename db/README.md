# Database Layer

This will be the main database in use for all microservices of the stack. As this is intended for small scale personal use with a few microservices depending on this db, concurrency and load shouldn't be a concern.

* `docker-entrypoint-intitdb.d` - contains all scripts to initialize local database, creating tables, triggers, etc
