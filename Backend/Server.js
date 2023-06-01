const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/taskRouter')

const cors = require('cors');
const app = express();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('mongo db connected....')
})
.catch(err => {
    console.log(err)
})
 

app.use("/api",routes)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
