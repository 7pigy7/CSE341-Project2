const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title:'Library API',
        description:'Authors and books'
    },
    host: 'cse341-project2-2724.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);