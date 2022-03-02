#!bin/bash
set -e
echo ">>>>>>> trying to create database and users"
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD<<EOF
db=db.getSiblingDB('${MONGO_INITDB_DATABASE}');
use ${MONGO_INITDB_DATABASE};
db.createUser({
  user:  '$MONGO_INITDB_USERNAME',
  pwd: '$MONGO_INITDB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '${MONGO_INITDB_DATABASE}'
  }]
});
EOF
