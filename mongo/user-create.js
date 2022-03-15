var db = connect("mongodb://root:example@localhost:27017/?authSource=admin");

db = db.getSiblingDB('{MONGO_INITDB_DATABASE}');
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
