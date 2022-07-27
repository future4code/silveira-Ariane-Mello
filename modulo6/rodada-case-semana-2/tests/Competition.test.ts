import CompetitionBusiness from "../src/business/CompetitionBusiness"

const inputMock = {
    competition_name: 'Dardo' as any,
    start_date: '27/07/2022' as any,
    end_date: '28/07/2022' as any
}

describe('test Competition Business', () => {
    test('test create competition invalid input name', async () => {
        const input = inputMock
        input.competition_name = ''
        try {
            await CompetitionBusiness.createCompetition(input)
        } catch (error: any) {
            input.competition_name = 'Dardo'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input start date', async () => {
        const input = inputMock
        input.start_date = ''
        try {
            await CompetitionBusiness.createCompetition(input)
        } catch (error: any) {
            input.start_date = '27/07/2022'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input end date', async () => {
        const input = inputMock
        input.end_date = ''
        try {
            await CompetitionBusiness.createCompetition(input)
        } catch (error: any) {
            input.end_date = '28/07/2022'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
})