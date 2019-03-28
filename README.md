# PhoneBook &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Manage your contacts with PhoneBook. This is a simple NodeJS + ReactJS app to manage your contacts. List, search, add and edit your contacts in a user friendly interface.

Feel free to clone this repo 

## Installation

```sh
$ git clone git@github.com:baptistefkt/phonebook.git
$ cd phonebook
$ npm install
```

#### Install MongoDB

Follow the [instructions](https://docs.mongodb.com/guides/server/install/) and install MongoDB on your machine. 
Once done, launch MongoDB server with `$ mongod` command.
If MongoDB has started successfully, you should see the following line in your terminal: 

```sh
$ [initandlisten] waiting for connections on port 27017
```

#### Launch node server

```sh
$ node server
```

#### Launch react client

```sh
$ cd client
$ npm install
$ npm start
```

Head to ["http://localhost:3000/"](http://localhost:3000/) and try to add a new entry.

🚀🚀🚀

### Dependencies

#### Back-end

* NodeJS, Express, Mongoose, Joi, body-parser, CORS.

#### Front-end

* ReactJS, react-router, styled-components, axios.

### Credit

* This app was developed and designed by me (no CSS framework)
* Icons : [fontawesome](https://fontawesome.com/icons?d=gallery)

### License

PhoneBook is [MIT licensed](./LICENSE).
