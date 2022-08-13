const express = require('express');
const morgan = require('morgan');

// Routes
const cityRouter = require('./src/routers/cityRouter')

// App config
const port = 3000;
const app = express();
app.use( express.urlencoded({extended: false}) );
app.use(morgan('dev')) // combined | common | dev |short | tiny

const api_path = '/asv2/api/form-data';
app.use(api_path, cityRouter);


app.get('/', async (req, res)=> {
    res.send({response: 'Welcome!'});
});

app.listen(port, ()=> {
    console.log(`Server is running at port: ${port}`);
});