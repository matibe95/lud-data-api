const fs = require('fs')
const path = require('path')
class JsonConDatos {
  constructor(nombreJson) {
    this.nombreJson = nombreJson;
    this.contenido = this.leerJson();
  }

  leerJson() {
    const dataFromJson = fs.readFileSync(path.resolve(__dirname, `${this.nombreJson}.json`), 'UTF-8');
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