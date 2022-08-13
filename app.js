const express = require('express');
const oracleConn = require('./src/database/oracleConn');

// Routes
const cityRouter = require('./src/routers/cityRouter')

// App config
const port = 3000;
const app = express();
app.use( express.urlencoded({extended: false}) );

const api_path = '/asv2/api/form-data';
app.use(api_path, cityRouter);


app.get('/', async (req, res)=> {
    res.send({response: 'Welcome!'});
});

app.listen(port, ()=> {
    console.log(`Server is running at port: ${port}`);
});