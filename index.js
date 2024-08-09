// Import package/library express
const express = require('express');

//Initialization application expressJS
const app = express();

const PORT = 4200;

//Parsing json 
const { UserController } = require('./controllers/user.controller');

app.use(express.json({ limit: '50mb' }));

//Parsing URL-encoded data
app.use(express.urlencoded( { 
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
}));

const userController = new UserController
userController.boot()

//SIMPLE ROUTING

/**
 * req adalah request
 * req adalah response
 */
// app.get('/', (req, res) => {
//     return res.status(200).send ("Hello, World");
// });

// app.get('/:id', (req, res) => {
//     return res.status(200).send (`Hello, World from ${req.params.id}`);
// });

// app.post('/', (req, res) => {
//     return res.status(201).send ("Ini adalah HTTP method POST");
// });

// app.put('/', (req, res) => {
//     return res.status(200).send ("Ini adalah HTTP method PUT");
// });

// app.delete('/', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP method DELETE");
// });

app.listen(PORT, () => {
    console.log('server is running in http://localhost:${PORT}');
});
