require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app.routes');


app.set('view engine', 'ejs');
app.use('/static',express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors({
    "origin": process.env.CLIENT_DOMAIN,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:3000");
});