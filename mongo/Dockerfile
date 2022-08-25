FROM mongo:5.0.11

COPY root-create.js /docker-entrypoint-initdb.d/root-create.js
COPY user-create.js /docker-entrypoint-initdb.d/user-create.js
ARG MONGO_INITDB_ROOT_USERNAME
ARG MONGO_INITDB_ROOT_PASSWORD
ARG MONGO_INITDB_USERNAME
ARG MONGO_INITDB_PASSWORD
ARG MONGO_INITDB_DATABASE
RUN sed -i "s#{MONGO_INITDB_ROOT_USERNAME}#${MONGO_INITDB_ROOT_USERNAME}#g" /docker-entrypoint-initdb.d/root-create.js
RUN sed -i "s#{MONGO_INITDB_ROOT_PASSWORD}#${MONGO_INITDB_ROOT_PASSWORD}#g" /docker-entrypoint-initdb.d/root-create.js
RUN sed -i "s#{MONGO_INITDB_ROOT_USERNAME}#${MONGO_INITDB_ROOT_USERNAME}#g" /docker-entrypoint-initdb.d/user-create.js
RUN sed -i "s#{MONGO_INITDB_ROOT_PASSWORD}#${MONGO_INITDB_ROOT_PASSWORD}#g" /docker-entrypoint-initdb.d/user-create.js
RUN sed -i "s#{MONGO_INITDB_USERNAME}#${MONGO_INITDB_USERNAME}#g" /docker-entrypoint-initdb.d/user-create.js
RUN sed -i "s#{MONGO_INITDB_PASSWORD}#${MONGO_INITDB_PASSWORD}#g" /docker-entrypoint-initdb.d/user-create.js
RUN sed -i "s#{MONGO_INITDB_DATABASE}#${MONGO_INITDB_DATABASE}#g" /docker-entrypoint-initdb.d/user-create.js
CMD [ "mongod" ]
