import paiza_io from 'paiza-io'
import { tests } from './tests.js'

export function runCode(code, language, res, testNumber) {
    console.log(code, language, testNumber)
    const {input, output} = tests[testNumber]
    paiza_io(language, code, input, (error, result) => {
        if(error) throw error
        result.stdout = result.stdout.trim()
        console.log(result.stdout === output)
        res.send({
            result: result.stdout === output,
            out: result.stdout,
            err: result.stderr,
            testNumber: testNumber
        })
    })
}