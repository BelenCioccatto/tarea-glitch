const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080


//HOME
app.get('/', (req, res) => {
  
  res.send(`<h1 style="color: green"> Esta es la página principal </h1>
           <h3 style="color: olive"> Usted puede dirigirse a /formulario o a /redirect </h3>`)
  
})


//FORMULARIO
app.get('/formulario', (req, res) => {
  
  res.send(`
  <h2 style="color: green"> Formulario </h2>
  <form>
      <p style="color: olive">
         Ingresa tu nombre: <input type="text" name="nombre">
         <input type="submit" style="color: olive" value="Enviar datos">
         <input type="reset" style="color: olive" value="Borrar datos">
      </p>
  </form>
  `)
})


//REDIRECCIONA A HOME
app.get('/redirect', (req, res) => {
  res.status(302).redirect('/')
  
})


app.listen(PORT, (err) => {
  if (err) throw new Error(err)
  console.log('Servidor escuchando en el puerto http://localhost:${PORT}')
})