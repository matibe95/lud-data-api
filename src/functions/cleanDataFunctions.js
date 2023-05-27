const splitArrays = (initialArr, amount) => {
  let subArrays = [];

  for (let i = 0; i < initialArr.length; i += amount) {
    subArrays.push(initialArr.slice(i, i + amount));
  }
  return subArrays
}


const convertirDataEnArrayDeObjetos = (data, accion, numSerie) => {
  return accion({ data, numSerie })
}

module.exports = {
  splitArrays,
  convertirDataEnArrayDeObjetos,
}