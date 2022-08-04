import DogWalkBusiness from "../src/business/DogWalkBusiness"

const inputMock = {
    date: '04/08/2022' as any,
    duration: '60' as any,
    latitude: '15.7448' as any,
    longitude: '71.0050' as any,
    pets: 1 as any,
    start_time: '09:00' as any,
    end_time: '10:00' as any
}

describe('test Dog Walk Business', () => {
    test('test create dog walk invalid input date', async () => {
        const input = inputMock
        input.date = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.date = '04/08/2022'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input duration', async () => {
        const input = inputMock
        input.duration = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.duration = '60'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input latitude', async () => {
        const input = inputMock
        input.latitude = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.latitude = '15.7448'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input longitude', async () => {
        const input = inputMock
        input.longitude = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.longitude = '71.0050'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input pets', async () => {
        const input = inputMock
        input.pets = 0
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.pets = 1
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input start time', async () => {
        const input = inputMock
        input.start_time = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.start_time = '09:00'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create dog walk invalid input end time', async () => {
        const input = inputMock
        input.end_time = ''
        try {
            await DogWalkBusiness.createDogWalk(input)
        } catch (error: any) {
            input.end_time = '10:00'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
})