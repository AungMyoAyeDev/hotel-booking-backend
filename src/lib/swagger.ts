import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hotel booking api doc",
      version: "1.0.0",
    },
  },
  apis: ["./src/route/*.ts"],
};

export const swaggerspec = swaggerJsdoc(options);
