const express = require('express');
const app = express();
var cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config();
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to MongoDB');
    },
);

app.use(cors());

const foodRoute = require('./routes/food.route.js');

app.use("/v1/api/food",foodRoute);

app.listen(PORT, () => console.log(`server started ${PORT}`))