const mongoose = require('mongoose');


const connectDatabase = ()=>{

    
    mongoose.connect(process.env.db_uri).then(()=>{
        console.log(`MongoDB connected with server`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase;