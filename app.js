const express = require('express');
const { conn } = require('./src/database/database')

const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Server running...')
});

server.listen(port, ()=> {
    console.log(`Server running at port: ${port}`)
});

// const test = async () => {
//     let result = await db.request('SELECT * FROM DEPARTMENTS');
//     console.log(result);

//     let CITIES = await db.request('SELECT * FROM CITIES');
//     console.log(CITIES);
// };

const test = async () => {
    let sodadb =  await conn();
    let collection = await sodadb.openCollection('cities');
    let result = await collection.find().filter({id_city: 0 }).getDocuments();
    console.log(result);
};
test();