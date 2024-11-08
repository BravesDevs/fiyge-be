const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/routes');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());

class FormBuilderService {


    constructor() {
        this.connect();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.startServer();
    }

    async connect() {

        if (mongoose.connection.readyState === 1) {
            return;
        }

        mongoose.connect('mongodb+srv://root:root@fiyge-be.bnpll.mongodb.net/formBuilder', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch(error => {
            console.log('Error connecting to MongoDB', error);
        });
    }

    async initializeMiddlewares() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors(
            {
                origin: '*',
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
                allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept', 'x-access-token'],
            }
        ));
    }

    async initializeRoutes() {
        app.use('/api', formRoutes);
    }

    async startServer() {
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    }
}

new FormBuilderService();