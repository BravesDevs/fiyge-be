require('dotenv').config();

const configs = {
    app: {
        port: process.env.PORT || 3000,
        name: process.env.APP_NAME || 'FormBuilder',
    },
    db: {
        url: process.env.MONGODB_ATLAS_URL || ''
    }
}

// default export

module.exports = { configs };