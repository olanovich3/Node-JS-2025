process.loadEnvFile()
import express from 'express'
const app = express()
const PORT = process.env.PORT
app.get('/hello', (request, res, nextFunction) => {
    res.status(200).send({ message:'Hello World endpoint recibido!'})
  })

  export default app