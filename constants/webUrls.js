const DEFAULT_SERIE = 1

const SERIES = Object.freeze({
  1: 'http://box2023.temp.domains/~ligauniv/get.php?link=1Posiciones_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-1-',
  2: 'http://box2023.temp.domains/~ligauniv/get.php?link=1Posiciones_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-2-',
  3: 'http://box2023.temp.domains/~ligauniv/get.php?link=1Posiciones_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-3-',
  4: 'http://box2023.temp.domains/~ligauniv/get.php?link=1Posiciones_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-4-',
  5: 'http://box2023.temp.domains/~ligauniv/get.php?link=1Posiciones_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-5-',
})

const RESULTADOS = Object.freeze({
  1: 'http://box2023.temp.domains/~ligauniv/get.php?link=3Fixture_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-1-!filtrarFecha=0',
  2: 'http://box2023.temp.domains/~ligauniv/get.php?link=3Fixture_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-2-!filtrarFecha=0',
  3: 'http://box2023.temp.domains/~ligauniv/get.php?link=3Fixture_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-3-!filtrarFecha=0',
  4: 'http://box2023.temp.domains/~ligauniv/get.php?link=3Fixture_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-4-!filtrarFecha=0',
  5: 'http://box2023.temp.domains/~ligauniv/get.php?link=3Fixture_red.asp?temporada=110!deporte=F!torneo=18!categoria=18!rueda=1!serie=18-5-!filtrarFecha=0',
})

module.exports = {
  SERIES,
  DEFAULT_SERIE,
  RESULTADOS
}