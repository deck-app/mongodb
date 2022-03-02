var db = connect("mongodb://localhost:27017/admin");

db.createUser(
    {
        user: "{DB_ROOT_USERNAME}",
        pwd: "{DB_ROOT_PASSWORD}",
        roles: ['dbAdminAnyDatabase', 'readWriteAnyDatabase', 'clusterAdmin', 'restore', 'backup']
    }
)