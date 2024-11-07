const express = require('express')
const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://joshuasol4950:joshuasol4950@cluster0.3apza.mongodb.net/").then(console.log("MongoDB Connected")).catch((error) => console.log(er))


const app = express()