const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const cors = require("cors")



mongoose.connect("mongodb+srv://joshuasol4950:joshuasol4950@cluster0.3apza.mongodb.net/").then(() => console.log("MongoDB Connected")).catch((error) => console.log(er))


const app = express();
const PORT = process.env.PORT || 5000


use.app(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-Controls',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)