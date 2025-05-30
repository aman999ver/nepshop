
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());



//middleware
app.use(bodyParser.json());

//Routes
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/products');

app.use(`/api/category`, categoryRoutes);
app.use(`/api/products`, productRoutes);

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

