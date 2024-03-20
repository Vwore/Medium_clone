const {MongoClient} = require('mongodb');
const mongoose =require('mongoose')
 let dbConnection

 module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/Medium').then((client) => {
            dbConnection=client.db();
            return cb()
        }).catch(err => {
            console.log(err);
            return cb(err)
        })
        mongoose.connect('mongodb://localhost:27017/Medium')
            .then(() => {
              // listen for requests
             console.log('mongoose connected')
            })
            .catch((error) => {
              console.log(error)
            })

    },
    getDb: () => dbConnection
 }