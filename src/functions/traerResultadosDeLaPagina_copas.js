const axios = require('axios')
const cheerio = require('cheerio')
const { RESULTADOS_COPAS, TABLA_COPAS } = require("../constants/webUrls")
const { convertirDataEnArrayDeObjetos, splitArrays } = require("./cleanDataFunctions")
const { objetoResultados, objetoTabla } = require('./metodosArrayObjetos')

async function traerDataDeLaPagina_copas({ copa, seccionPágina }) {
  const PAGINAS_SECCIONES = {
    'tabla': {
      division: 8,
      url: TABLA_COPAS[copa],
      accion: objetoTabla,
    },
    'resultados': {
      division: 6,
      url: RESULTADOS_COPAS[copa],
      accion: objetoResultados,
    }
  }

  const { division, url, accion } = PAGINAS_SECCIONES[seccionPágina]
  const cantidadDeDivisionesDelArray = division

  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const info = $('div table tbody tr td').get().map(val => $(val).text())
  const infoSplit = splitArrays(info, cantidadDeDivisionesDelArray)
  const arrayData = convertirDataEnArrayDeObjetos(infoSplit, accion, copa)
  return arrayData
}

module.exports = {
    traerDataDeLaPagina_copas,
}