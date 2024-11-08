const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/routes');

const { configs } = require('./configs/applicationConfigs');

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
        mongoose.connect(configs.db.url, {
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
        app.listen(configs.app.port, () => {
            console.log(`${configs.app.name} running on port ${configs.app.port}`);
        });
    }
}

new FormBuilderService();