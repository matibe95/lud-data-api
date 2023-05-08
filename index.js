const { chromium } = require('playwright')
const app = require('express')()
const port = process.env.PORT || 8008
const { convertArraysIntoProperObject, splitArrays } = require('./cleanDataFunctions.js')

app.get('/', (req, res) => {
  res.status(200).send('<h1>Matibe LUD Data Api</h1>')
})

app.get('/:ticker', async (req, res) => {
  const { ticker } = req.params
  const { key } = req.query

  if (!ticker || !key) {
    return res.status(400).send({ message: 'Por favor introduzca una key y ticker' })
  }

  try {
    const url = 'http://ligauniversitaria.org.uy/sitio/index.php?option=com_k2&view=itemlist&layout=generic&tag=futbol%20sub18%20a&task=tag&Itemid=120'

    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const completeTable = await page.frameLocator('iframe[id="blockrandom"]').first().locator('div table tbody tr td').allTextContents()

    const data = splitArrays(completeTable)
    const dataObject = convertArraysIntoProperObject(data)

    res.send({ data: dataObject })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }

})

app.listen(port, () => console.log(`Server iniciado correctamente en el puerto ${port}`))
