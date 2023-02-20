var db = connect("mongodb://root:example@localhost:27017/?authSource=admin");

db = db.getSiblingDB('admin');
db.createUser(
    {
        user: "{MONGO_INITDB_USERNAME}",
        pwd: "{MONGO_INITDB_PASSWORD}",
        roles:[
              {
                role: "readWrite",
                db: "{MONGO_INITDB_DATABASE}"
              }  
        ]
    }
)
db.auth("{MONGO_INITDB_USERNAME}", "{MONGO_INITDB_PASSWORD}")
db.createCollection("user_collection")
