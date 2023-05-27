const fs = require('fs')
const path = require('path')
console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));
// const jaja = require('path').dirname(require.main.filename)
class JsonConDatos {
  constructor(nombreJson) {
    this.nombreJson = nombreJson;
    this.contenido = this.leerJson();
  }

  leerJson() {
    const dataFromJson = fs.readFileSync(path.resolve(__dirname, 'serie2.json'), 'UTF-8');
    // const dataFromJson = fs.readFileSync(`./src/mocks/${this.nombreJson}.json`)
    const jsonConLosResultados = JSON.parse(dataFromJson)
    return jsonConLosResultados;
  }

  sobreEscribirResultado(propiedadParaCambiar, nuevoValor) {
    this.contenido[propiedadParaCambiar] = nuevoValor
    const newResults = JSON.stringify(this.contenido, null, 2)
    fs.writeFile(`./src/mocks/${this.nombreJson}.json`, newResults, () => console.log('overwrited file.'))
    return this.contenido
  }

}

module.exports = {
  JsonConDatos,
}