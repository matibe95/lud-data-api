const { leerJson } = require("./agregarResultadoAlJson")

function agregarResultadoAlHistorial({ numeroDeFecha, resultados, numSerie }) {

  const { fechas } = leerJson()

  // console.log(numSerie - 1)
  // const resultado = diasPartido[numSerie - 1]
  return { fechas }
}

module.exports = {
  agregarResultadoAlHistorial
}