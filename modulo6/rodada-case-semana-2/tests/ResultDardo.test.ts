import ResultBusinessDardo from "../src/business/ResultBusinessDardo"

const inputMock = {
    competition_name: 'Dardo' as any,
    athlete_name: 'Ariane' as any,
    value_1: '70' as any,
    value_2: '10' as any,
    value_3: '35' as any,
    unity: 'm' as any
}

describe('test Result Business', () => {
    test('test result competition invalid input competition name', async () => {
        const input = inputMock
        input.competition_name = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.competition_name = 'Dardo'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input athlete name', async () => {
        const input = inputMock
        input.athlete_name = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.athlete_name = 'Ariane'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value 1', async () => {
        const input = inputMock
        input.value_1 = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.value_1 = '70'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value 2', async () => {
        const input = inputMock
        input.value_2 = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.value_2 = '10'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value 3', async () => {
        const input = inputMock
        input.value_3 = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.value_3 = '35'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input unity', async () => {
        const input = inputMock
        input.unity = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.unity = 's'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
})