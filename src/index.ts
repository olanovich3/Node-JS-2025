import app from './framework/server'
process.loadEnvFile()
const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Servidor escuchando...${PORT}`)
  console.log(`DB_URL=${process.env.DB_URL}`)
})
