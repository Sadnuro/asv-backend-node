const express = require('express');
const morgan = require('morgan');

// Routes
const cityRouter = require('./src/routers/cityRouter')
const departmentRouter = require('./src/routers/departmentRouter');
const countryRouter = require('./src/routers/countryRouter')
const documentTypeRouter = require('./src/routers/documentTypeRouter');
const postulationStatusRouter = require('./src/routers/postulationStatusRouter');
const residenceTypeRouter = require('./src/routers/residenceTypeRouter');
const stratumRouter = require('./src/routers/stratumRouter');

// App config
const port = 3000;
const app = express();
app.use( express.urlencoded({extended: false}) );
app.use( express.json() );
app.use( morgan('dev') ) // combined | common | dev |short | tiny

const api_path = '/asv2/api';
const api_client_path = '/asv2/api/form-data';

app.use(api_client_path, cityRouter);
app.use(api_client_path, departmentRouter);
app.use(api_client_path, countryRouter);
app.use(api_client_path, documentTypeRouter);
app.use(api_client_path, postulationStatusRouter);
app.use(api_client_path, residenceTypeRouter);
app.use(api_client_path, stratumRouter);


app.get('/', async (req, res)=> {
    res.send({response: 'Welcome!'});
});

app.listen(port, ()=> {
    console.log(`Server is running at port: ${port}`);
});