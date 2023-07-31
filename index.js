const cors = require('cors')
const app = require('express')()
const port = process.env.PORT || 8008
const { htmlPage } = require('./src/constants/htmlPage.js')
const { traerDataDeLaPagina } = require('./src/functions/traerResultadosDeLaPagina.js')
const { traerDataDeLaPagina_copas } = require('./src/functions/traerResultadosDeLaPagina_copas.js')

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(htmlPage)
})

app.get('/serie/:id/seccion/:seccion', async (req, res) => {
  const { id, seccion } = req.params;
  const numSerie = parseInt(id)
  const seccionPágina = seccion

  try {
    res.send({
      data: await traerDataDeLaPagina({ numSerie, seccionPágina })
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

app.get('/v2/serie/:copa/seccion/:seccion', async (req, res) => {
  const { copa, seccion } = req.params;
  const seccionPágina = seccion
  
  try {
    res.send({
      data: await traerDataDeLaPagina_copas({copa, seccionPágina})
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.listen(port, () => console.log(`Server iniciado correctamente en el puerto ${port}`))
