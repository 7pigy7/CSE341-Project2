const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Library API',
        description: 'Authors and books'        
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);