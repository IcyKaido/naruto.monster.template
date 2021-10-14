const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'search.html'))
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
