import ResultBusinessDardo from "../src/business/ResultBusinessDardo"

const inputMock = {
    competition_name: 'Dardo' as any,
    athlete_name: 'Ariane' as any,
    highest_value: '70' as any,
    average_value: '10' as any,
    lowest_value: '35' as any,
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
        input.highest_value = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.highest_value = '70'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value 2', async () => {
        const input = inputMock
        input.average_value = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.average_value = '10'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value 3', async () => {
        const input = inputMock
        input.lowest_value = ''
        try {
            await ResultBusinessDardo.registerResultDardo(input)
        } catch (error: any) {
            input.lowest_value = '35'
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