const express = require('express');
const mongoose = require('mongoose')
const app = express();

const dburl = 'mongodb+srv://sreehari123:7YzKrWdgfSnv1n06@clusterlearn.vkc2lah.mongodb.net/bms?retryWrites=true&w=majority&appName=ClusterLearn';

mongoose.connect(dburl).then(function() {
    console.log("DB Connected !");
}).catch(err => console.log(err));

app.use(express.json());

app.listen(8081,() => {
    console.log("Listening to port 8081 !");
} )