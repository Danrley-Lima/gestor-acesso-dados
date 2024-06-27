export const swaggerDefinition = {
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API Documentation",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      description: "Local server",
    },
  ],
  components: {
    schemas: {
      Resource: {
        type: "object",
        properties: {
          repository: {
            type: "string",
            description: "Nome do repositorio do qual buscará dados CKAN, DKAN ou SOCRATA",
          },
        },
      },
    },
  },
};

export const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: ["src/routes/*.ts"],
};
