const axios = require('axios')
const cheerio = require('cheerio')
const app = require('express')()
const port = process.env.PORT || 8008
const { convertArraysIntoProperObject, splitArrays } = require('./cleanDataFunctions.js')
const { DEFAULT_SERIE, SERIES } = require('./constants/webUrls.js')

app.get('/', (req, res) => {
  res.status(200).send('<h1>Matibe LUD Data Api</h1>')
})

app.get('/serie/:id', async (req, res) => {

  const { id } = req.params;

  try {
    const url = SERIES[id] || DEFAULT_SERIE

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    const info = $('div table tbody tr td').get().map(val => $(val).text())
    const infoSplit = splitArrays(info)
    const dataObject = convertArraysIntoProperObject(infoSplit)

    res.send({ data: dataObject })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

})

app.listen(port, () => console.log(`Server iniciado correctamente en el puerto ${port}`))
