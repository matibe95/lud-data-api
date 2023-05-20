const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const app = require('express')()
const port = process.env.PORT || 8008
const { convertArraysIntoProperObject, splitArrays, arrayToObjectSerie_Results, convertSerieArrayIntoObject } = require('./src/functions/cleanDataFunctions.js')
const { DEFAULT_SERIE, URL_SERIES, RESULTADOS } = require('./src/constants/webUrls.js')
const { htmlPage } = require('./src/constants/htmlPage.js')

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(htmlPage)
})

app.get('/serie/:id?*', async (req, res) => {

  const { id } = req.params;

  try {
    async function traerTabla() {
      if (!!id) {
        return await tablaDeUnaSolaSerie({ numSerie: id })
      }
      return await tablaDeTodasLasSeries()
    }

    res.send({
      data: await traerTabla()
    })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

  async function tablaDeUnaSolaSerie({ numSerie }) {
    const url = URL_SERIES[numSerie]

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    const info = $('div table tbody tr td').get().map(val => $(val).text())
    const infoSplit = splitArrays(info, 8)
    const dataObject = convertArraysIntoProperObject(infoSplit)

    return dataObject
  }

  async function tablaDeTodasLasSeries() {
    let arrayRespuesta = []
    for (const i in URL_SERIES) {
      arrayRespuesta.push(await tablaDeUnaSolaSerie({ numSerie: i }))
    }
    return convertSerieArrayIntoObject(arrayRespuesta)
  }

})

app.get('/serie/:id/resultados', async (req, res) => {

  const { id } = req.params;

  try {
    const url = RESULTADOS[id] || DEFAULT_SERIE

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    const info = $('div table tbody tr td').get().map(val => $(val).text())
    const infoSplit = splitArrays(info, 6)
    const dataObject = arrayToObjectSerie_Results(infoSplit)

    res.send({
      data: dataObject
    })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

})

app.listen(port, () => console.log(`Server iniciado correctamente en el puerto ${port}`))
