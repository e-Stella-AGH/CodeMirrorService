const createTestCase = (input) => {
    return {
        input: input,
        output: `${2*input}`
    }
}

export const tests = [
    createTestCase(1),
    createTestCase(2)
]