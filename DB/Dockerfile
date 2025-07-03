FROM mysql:8.0

ENV MYSQL_DATABASE=iSubscribeDB
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

COPY iSubscribeDB_Dump.sql /docker-entrypoint-initdb.d/
