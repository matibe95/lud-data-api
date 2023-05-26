const splitArrays = (initialArr, amount) => {
  let subArrays = [];

  for (let i = 0; i < initialArr.length; i += amount) {
    subArrays.push(initialArr.slice(i, i + amount));
  }
  return subArrays
}

const convertSerieArrayIntoObject = (data) => {
  const objeto = {};
  objeto.serie1 = data[0]
  objeto.serie2 = data[1]
  objeto.serie3 = data[2]
  objeto.serie4 = data[3]
  objeto.serie5 = data[4]

  return objeto
}

const convertirDataEnArrayDeObjetos = (data, accion, numSerie) => {
  return (accion({ data, numSerie }))
}

module.exports = {
  splitArrays,
  convertirDataEnArrayDeObjetos,
  convertSerieArrayIntoObject,
}