const express = require('express')
const cohorts = require('./data/cohorts')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())

app.get('/', (req, res) => res.json({data: cohorts}))

app.listen(3000, () => console.log('Example app listening non port 3000!'))


app.listen(port)