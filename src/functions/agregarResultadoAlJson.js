
function leerJson() {
  const fs = require('fs')
  const dataFromJson = fs.readFileSync('./src/mocks/resultados.json')
  const resultsJson = JSON.parse(dataFromJson)
  return resultsJson;
}


function agregarResultadoAlJson(numeroDeSerie, numeroDeFecha, resultadosArray) {
  const fs = require('fs')
  const dataFromJson = fs.readFileSync('./src/mocks/resultados.json')
  const resultsJson = JSON.parse(dataFromJson)


  const resultadosDeLaFecha = {
    'fecha': Number(numeroDeFecha),
    'resultados': resultadosArray,
  }

  const arrayResultadoSerie = resultsJson['serie' + numeroDeSerie]

  if (!verificarSiYaExisteElResultado(resultadosDeLaFecha, arrayResultadoSerie)) {

    switch (numeroDeSerie) {
      case 1:
        resultsJson.serie1.push(resultadosDeLaFecha)
        break;
      case 2:
        resultsJson.serie2.push(resultadosDeLaFecha)
        break;
      case 3:
        resultsJson.serie3.push(resultadosDeLaFecha)
        break;
      case 4:
        resultsJson.serie4.push(resultadosDeLaFecha)
        break;
      case 5:
        resultsJson.serie5.push(resultadosDeLaFecha)
        break;
    }

  }
  sobreEscribir({ resultadosDeLaFecha, arrayResultadoSerie })
  const newResults = JSON.stringify(resultsJson, null, 2)
  fs.writeFile('./src/mocks/resultados.json', newResults, () => console.log('overwrited file.'))

  return resultsJson
}

function sobreEscribir({ resultadosDeLaFecha, arrayResultadoSerie }) {
  for (let i = 0; i < arrayResultadoSerie.length; i++) {
    if (arrayResultadoSerie[i].fecha === resultadosDeLaFecha.fecha) {
      arrayResultadoSerie[i].resultados = resultadosDeLaFecha.resultados
    }
  }
}

function verificarSiYaExisteElResultado(resultadosFechaActual, arrayResultadosDeLaSerie) {
  const verificarSiEsMismaFecha = () => {
    const numeroDeFecha = arrayResultadosDeLaSerie.find(resultado => resultado.fecha === resultadosFechaActual.fecha)
    if (!!numeroDeFecha) {
      return true
    }
    return false
  }

  const verificarSiEsMismoResultado = (resultadoParaCambiar) => {
    const arrayResultadosFechaParaCambiar = resultadoParaCambiar.resultados

    for (let i = 0; i < resultadosFechaActual.resultados.length; i++) {
      const partidoNuevo = resultadosFechaActual.resultados[i];
      const partidoOriginal = arrayResultadosFechaParaCambiar[i];

      const nuevo_primerEquipoGoles = parseInt(partidoNuevo.primerEquipoGoles)
      const original_primerEquipoGoles = (partidoOriginal.primerEquipoGoles)
      const nuevo_segundoEquipoGoles = parseInt(partidoNuevo.segundoEquipoGoles)
      const original_segundoEquipoGoles = parseInt(partidoOriginal.segundoEquipoGoles)


      if (nuevo_primerEquipoGoles !== original_primerEquipoGoles || nuevo_segundoEquipoGoles !== original_segundoEquipoGoles) {
        return { partidoOriginal, partidoNuevo, i }
      }
    }
    return true;
  }

  if (verificarSiEsMismaFecha()) {
    return true
  }
  return false
}

module.exports = {
  agregarResultadoAlJson,
  leerJson,
}