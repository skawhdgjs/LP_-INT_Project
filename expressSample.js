/*
 * require - npm express
 *
 */

const app = require('express')()

app.get('/', (req,res) => {
  res.send('Hellow world')
})

app.listen(3000, () => {
  console.log("Sample app")
})
