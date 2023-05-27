const { JsonConDatos } = require("./manipularJson")

function agregarResultadoAlHistorial({ numeroDeFecha, numSerie, resultados }) {
  const serie = 'serie' + numSerie
  const jsonConResultadosDeLaSerie = new JsonConDatos(serie)

  const resultadosDeLaSerie = jsonConResultadosDeLaSerie.contenido
  const nuevoResultado = resultados

  const propiedadParaCambiar = encontrarFecha({
    numeroDeFecha,
    nuevoResultado,
    resultadosDeLaSerie,
    serie
  })

  return jsonConResultadosDeLaSerie.sobreEscribirResultado(propiedadParaCambiar, nuevoResultado)
}

function encontrarFecha({ numeroDeFecha, resultadosDeLaSerie }) {
  for (const propiedad in resultadosDeLaSerie) {
    if (propiedad === numeroDeFecha) {
      return propiedad
    }
  }
  return numeroDeFecha
}

module.exports = {
  agregarResultadoAlHistorial
}