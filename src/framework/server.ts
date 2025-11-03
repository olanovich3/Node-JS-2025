process.loadEnvFile();
import express from "express";
const app = express();
const PORT = process.env.PORT;
app.get("/hello", (request, res, nextFunction) => {
  res.status(200).send({ message: "Hello World endpoint recibido!" });
});
app.get("/oldfeature", (request, res, nextFunction) => {
  res.status(503).send({ message: "Servicio deshabilitado" });
});

export default app;
