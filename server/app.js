
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require ('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json());

//routes
//const categoriesRoutes = require('./routes/categories'); // ✅ Ensure this file is correct

//use routes
//app.use('/api/categories', categoriesRoutes);


//DATABASE
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connection is ready...');
    //server
    app.listen(process.env.PORT, () => {
        console.log(`server is running https://localhost:${process.env.PORT}`);
    });
    
})
.catch((err) => {
    console.log(err);
    
})

