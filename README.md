# Star War API

API STAR WARS prueba para rimac
### Installation 

instalar módulos npm.

npm install
npm install swapi-node

### Setup Environment

*NODE_ENV* con el valor *"development"*


```sql
CREATE DATABASE api;
```

### Migrations

ejecutar migraciones

```sh
npx sequelize-cli db:migrate 
```

### Resources

json para ejecutar film/post

#### Modelo

```bash
{
    "director": "dpolo",
    "episode_id": 4,
    "opening_crawl": "daniel",
    "producer": "dsdsd",
    "release_date": "Now",
    "title": "el programador vuelve",
    "people": 1,
    "url": "https://depor.com",
    "createdAt": "2021-01-01",
    "updatedAt": "2021-01-01",
    "created": "valor"
}
```

##### Films

| Resource / HTTP method | Post             | Get         | Patch                  | Delete             |
| ---------------------- | ---------------- | ----------- | ---------------------- | ------------------ |
| `film/post`            | crea un nuevo film  | List films  | Error                  | Error              |
| `film/all`       | error         | lista los film    | error | error       |


#

```sh
http://{host}:3000/{environment}/film/all
```

```sh
npm start
```