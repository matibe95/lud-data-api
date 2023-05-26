const axios = require('axios')
const cheerio = require('cheerio')
const { RESULTADOS, URL_SERIES } = require("../constants/webUrls")
const { convertirDataEnArrayDeObjetos, splitArrays } = require("./cleanDataFunctions")
const { objetoResultados, objetoTabla } = require('./metodosArrayObjetos')

async function traerDataDeLaPagina({ numSerie, seccionPágina }) {
  const PAGINAS_SECCIONES = {
    'tabla': {
      division: 8,
      url: URL_SERIES[numSerie],
      accion: objetoTabla,
    },
    'resultados': {
      division: 6,
      url: RESULTADOS[numSerie],
      accion: objetoResultados,
    }
  }

  const { division, url, accion } = PAGINAS_SECCIONES[seccionPágina]
  const cantidadDeDivisionesDelArray = division

  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const info = $('div table tbody tr td').get().map(val => $(val).text())
  const infoSplit = splitArrays(info, cantidadDeDivisionesDelArray)
  const arrayData = convertirDataEnArrayDeObjetos(infoSplit, accion, numSerie)
  return arrayData
}

module.exports = {
  traerDataDeLaPagina,
}