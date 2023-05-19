const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const app = require('express')()
const port = process.env.PORT || 8008
const { convertArraysIntoProperObject, splitArrays, arrayToObjectSerie_Results } = require('./src/functions/cleanDataFunctions.js')
const { DEFAULT_SERIE, SERIES, RESULTADOS } = require('./src/constants/webUrls.js')
const { htmlPage } = require('./src/constants/htmlPage.js')

app.use(cors())

app.get('/', (req, res) => {

  res.status(200).send(htmlPage)
})

app.get('/serie/:id', async (req, res) => {

  const { id } = req.params;

  try {
    const url = SERIES[id] || DEFAULT_SERIE

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    const info = $('div table tbody tr td').get().map(val => $(val).text())
    const infoSplit = splitArrays(info, 8)
    const dataObject = convertArraysIntoProperObject(infoSplit)

    res.send({
      tabla: dataObject
    })

  } catch (error) {
    res.status(500).send({ message: error.message })
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
      resultados: dataObject
    })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

})

app.listen(port, () => console.log(`Server iniciado correctamente en el puerto ${port}`))
