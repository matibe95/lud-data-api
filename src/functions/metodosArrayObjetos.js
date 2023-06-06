const { agregarResultadoAlHistorial } = require("./agregarResultadoAlHistorial");

function convertirResultadosEnArray({ data }) {
  const resultados = [];
  if (data.length === 0) {
    return { resultados: null, numeroDeFecha: null };
  }
  const numeroDeFecha = data[data.length - 1][0].split(' ')[1]
  for (const array of data) {
    const partido = {};
    partido.primerEquipo = array[2].trim();
    partido.primerEquipoGoles = array[3].trim().replace(/[\s\-]+/g, '');
    partido.segundoEquipoGoles = array[4].trim();
    partido.segundoEquipo = array[5].trim();
    if (array[0].split(' ')[1] === numeroDeFecha) resultados.push(partido);
  }
  return { resultados, numeroDeFecha }
}

const objetoResultados = ({ data, numSerie }) => {
  const { numeroDeFecha, resultados } = convertirResultadosEnArray({ data })
  const arrayConResultadosDeSerie = agregarResultadoAlHistorial({ numeroDeFecha, resultados, numSerie })
  const series = arrayConResultadosDeSerie
  return series
}
const objetoTabla = ({ data }) => {
  const objetosArray = [];
  for (const array of data) {
    const objeto = {};
    objeto.equipo = array[0];
    objeto.jugados = array[1].trim();
    objeto.ganados = array[2].trim();
    objeto.empatados = array[3].trim();
    objeto.perdidos = array[4].trim();
    objeto.golesFavor = array[5].trim();
    objeto.golesContra = array[6].trim();
    objeto.puntos = array[7].trim();
    objetosArray.push(objeto);
  }
  return objetosArray
}

module.exports = {
  objetoResultados,
  objetoTabla,
}
