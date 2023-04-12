CREATE DATABASE employment_db
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8';

ALTER DATABASE employment_db
    OWNER TO postgres;

\connect employment_db
