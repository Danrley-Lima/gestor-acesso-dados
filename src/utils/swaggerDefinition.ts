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
      Test: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "A test message",
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
