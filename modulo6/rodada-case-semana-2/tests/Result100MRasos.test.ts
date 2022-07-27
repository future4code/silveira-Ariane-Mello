import ResultBusinessMRasos from "../src/business/ResultBusiness100MRasos"

const inputMock = {
    competition_name: '100m Rasos' as any,
    athlete_name: 'Ariane' as any,
    value: '70' as any,
    unity: 's' as any
}

describe('test Result Business', () => {
    test('test result competition invalid input competition name', async () => {
        const input = inputMock
        input.competition_name = ''
        try {
            await ResultBusinessMRasos.registerResult100MRasos(input)
        } catch (error: any) {
            input.competition_name = '100m Rasos'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input athlete name', async () => {
        const input = inputMock
        input.athlete_name = ''
        try {
            await ResultBusinessMRasos.registerResult100MRasos(input)
        } catch (error: any) {
            input.athlete_name = 'Ariane'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value', async () => {
        const input = inputMock
        input.value = ''
        try {
            await ResultBusinessMRasos.registerResult100MRasos(input)
        } catch (error: any) {
            input.value = '70'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input unity', async () => {
        const input = inputMock
        input.unity = ''
        try {
            await ResultBusinessMRasos.registerResult100MRasos(input)
        } catch (error: any) {
            input.unity = 's'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
})