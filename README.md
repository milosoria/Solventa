README for project Solventa, Grupo 82
# Template

Template built with [koa](http://koajs.com/) for IIC2513 - Tecnologías y Aplicaciones Web, Pontificia Universidad Católica de Chile.

## Prerequisites:
* PostgreSQL
  * you will need a database with name and user/password as configured in `src/config/database.js`
* Node.js LTS (10.x or 12.x)
* [Yarn](https://yarnpkg.com)
* create .env file and add `DB_USERNAME=user_name, DB_PASSWORD=db_password, DB_NAME=db_name`
## Project Setup

* Clone repository
* Install dependencies:
  * `yarn install`

## Database Setup (development)

### Install postgresql
* On Mac OS X using Homebrew: `brew install postgresql`
  * Start service: check [LaunchRocket](https://github.com/jimbojsb/launchrocket) or [lunchy](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/) for postgresql service management
* [Other platforms](https://www.postgresql.org/download/)

### Create development database

```sh
createdb solventa
```

### Run migrations
```sh
./node_modules/.bin/sequelize db:migrate
```

## Run the app!

```sh
yarn start
```

or directly

```sh
node index.js
```

or, if you want automatic restart after any change in your files

```sh
yarn dev
```

Now go to http://localhost:3000 and start browsing :)

### TODO
- [ ] Seed de servicios
- [ ] Modelo servicios
- [ ] Cambiar form
- [ ] Logica de las recomendaciones
- [ ] Hacer consultas para guardar datos estaticamente

service: name, rating, installedCapacity, price, brand, photo, location, maxReturn, minReturn, maxYearly, minYearly, spaceAvailable, gasReduction,  productLifetime
