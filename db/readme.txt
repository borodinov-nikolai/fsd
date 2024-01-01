скачать образ postgres: "docker pull postgres:16.1-alpine3.19"



создание образа: "docker run -d --name postgres -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=your_meal -e POSTGRES_ENCODING=UTF-8 -p 5555:5432 postgres:16.1-alpine3.19"
создать dump: docker exec -it container_id ch
pg_dump -U postgres --encoding=UTF8 your_meal > /root/dump.sql
docker cp your_postgres_container:/root/dump.sql C:\path\on\local\machine

восстановить: docker cp C:/path/on/local/machine/dump.sql your_postgres_container:/root
psql -U postgres -d your_meal < /root/dump.sql