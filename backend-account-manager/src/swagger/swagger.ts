import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Account Manager API',
        version: '1.0.0',
        description: 'API Documentation'
    },
    servers: [
        {
            url: 'http://localhost:5000'
        }
    ]
}

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  export { swaggerUi, swaggerSpec }
