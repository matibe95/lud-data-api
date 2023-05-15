const splitArrays = (initialArr, amount) => {
  let subArrays = [];

  for (let i = 0; i < initialArr.length; i += amount) {
    subArrays.push(initialArr.slice(i, i + amount));
  }
  return subArrays
}

const convertArraysIntoProperObject = (data) => {
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

const arrayToObjectSerie_Results = (data) => {
  const objetosArray = [];
  for (const array of data) {
    const objeto = {};

    objeto.primerEquipo = array[2].trim();
    objeto.primerEquipoGoles = array[3].trim().replace(/[\s\-]+/g, '');
    objeto.segundoEquipoGoles = array[4].trim();
    objeto.segundoEquipo = array[5].trim();
    objetosArray.push(objeto);
  }
  return objetosArray
}

module.exports = {
  convertArraysIntoProperObject,
  splitArrays,
  arrayToObjectSerie_Results,
}