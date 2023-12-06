const express = require('express');
const PORT = 8000;
const server = express();
const db = require('./models');
require('dotenv').config()


server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('This is my API')
})

const { totalCostRouters } = require('./routers');
server.use(totalCostRouters)


server.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
    // db.sequelize.sync( {alter:true} ) //------------------- Synchronize
})