const splitArrays = (initialArr) => {
  let subArrays = [];

  for (let i = 0; i < initialArr.length; i += 8) {
    subArrays.push(initialArr.slice(i, i + 8));
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

module.exports = {
  convertArraysIntoProperObject,
  splitArrays,
}