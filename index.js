import express from 'express'
import cors from 'cors'
import { runCode } from './api.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//tu chyba poiwnno być jeszcze testId, ale to na razie jeden test jest XD
app.post('/runTests/:testNumber', (req, res) => {
    const testNumber = req.params.testNumber
    runCode(req.body.code, req.body.language, res, testNumber)
})

app.get('/numberOfTests/:testId', (req, res) => {
    const testId = req.params.testId
    res.send({result: tests.length})
})

app.listen(8080, () => console.log('server is running!'))