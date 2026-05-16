import swaggerJsdoc from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";

const options: SwaggerOptions = {
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
