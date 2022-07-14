const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDatabase = require('./config/db')
const dotenv = require('dotenv')
const app = express();

dotenv.config({path:'config/config.env'});

const registerRoutes = require("./routes/registerRouter.js")
const loginRoutes = require("./routes/loginRouter.js")


connectDatabase();



const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json(), urlencodedParser)
app.use(cors())



app.use("/signup", registerRoutes)
app.use("/login", loginRoutes)


const server = app.listen(process.env.port,()=>{
    console.log(`Backend server is working on https://localhost:${process.env.PORT}`)
})
