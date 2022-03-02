## MongoDB
MongoDB(R) is a relational open source NoSQL database. Easy to use, it stores data in JSON-like documents. Automated scalability and high-performance. Ideal for developing cloud native applications.

## Install
### Using DECK
Install MongoDB from the DECK marketplace and follow the instructions on the GUI
### From terminal with Docker
```console
$ git clone https://github.com/deck-app/mongodb.git
$ cd mongodb
$ docker-compose up -d
```
### Modifying project settings
From the DECK app, go to stack list and click on project's `More > configure > Advanced configuration` Follow the instructions below and restart your stack from the GUI
### Rebuilding from terminal
You have to rebuild the docker image after you make any changes to the project configuration, use the snippet below to rebuild and restart the stack
```
docker-compose stop && docker-compose up --build -d
```
