const htmlPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
  <title>LUD-API</title>
</head>
<body>
  <div id="titulo_container">
    <h1>LigaUniversitaria API</h1>
    <p>API destinada a proveer datos futbolísticos de la LUD.</p>
    <p>Toda la información brindada es extraída de la página oficial de La Liga Universitaria.
      <a href="http://ligauniversitaria.org.uy/sitio/">Ir al sitio original.</a>
    </p>
  </div>
  <article id="pruebala_container">
      <h2>Pruebala</h2>
      <p>Corre este código aquí, en la consola o en cualquier otro sitio.</p>
    <section class="code_container">
      <p>
        <span class="function">fetch</span>
        <span>(</span><span id="string">'https://lud-api.vercel.app/serie/1/seccion/tabla'</span><span>)</span>
        <br>
        <span class="punto">.</span><span class="function">then</span>(response <span class="arrow">=></span> response.<span>json()</span>)
        <br>
          <span class="punto">.</span><span class="function">then</span>(json <span class="arrow">=></span>console.<span class="function">json</span>(json))
        <br>
        <br>
      </p>
    </section>
  </article>
  <article>
    <div class="rutas_info">
      <h2>Rutas</h2>
      <p>LUD-API contiene 2 rutas utilizables.</p>
    </div>
    <section class="rutas_ejemplos">
      <p>/serie/{numero de serie}/seccion/tabla" <span class="info-rutas">(Tabla de posiciones de la serie.)</span></p> 
      <p>/serie/{numero de serie}/seccion/resultados <span class="info-rutas">(Resultados de la ultima fecha de la serie.)</span></p> 
    </section>
  </article>
  <footer>
    <h3>Esta API fue diseñada para facilitar el acceso a la información de la Liga Universitaria</h3>
    <p>Dentro de su propósito jamás está sustituir la página original ni hacerle competencia a esta.</p>
  </footer>
  <style>
    * {
      padding: 0;
      margin: 0;
      font-family: 'Lexend', sans-serif;
      box-sizing: border-box;
    }

    body {
      padding: 0 50px;
    }

    #titulo_container {
      margin: 50px 0px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      /* align-items: center;
      text-align: center; */
    }
    #titulo_container button {
      padding: 5px 10px;
      width: fit-content;
    }

    #pruebala_container p {
      margin: 20px 0;
    }
    #pruebala_container {
      margin-bottom: 50px;
    }

    .code_container {
      /* max-width: 700px; */
      font-size: large;
      padding: 20px;
      border-radius: 10px;
      background-color: #252525;
      color: #ccc
    }

    .function {
      color: #f08d49;
    }

    #string {
      color: #7ec699;
    }

    .arrow {
      color: #67cdcc;
    }

    .punto {
      margin-left: 40px;
    }

    .rutas_info{
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 40px 0;
    }

    .rutas_ejemplos {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-right: 150px;
      margin-bottom: 50px;
      color: #09f;
    }

    .info-rutas {
      color:#252525;
      margin-left: 20px;
    }
  </style>
</body>
</html>`

module.exports = {
  htmlPage
}