FROM postgres:latest

# scripts in docker-entrypoint-initdb.d directory are ran sorted name order
COPY ./docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
