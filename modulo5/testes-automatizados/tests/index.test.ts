import { purchase } from '../src/data/index';
import { User } from '../src/types/user';

describe('test index.test.ts', () => {
    test('balance test greater than the purchase amount', () => {
        const user: User = {
            name: 'Ariane',
            balance: 100
        }
        const result = purchase(user, 50)
        expect(result).toEqual({ name: 'Ariane', balance: 50 })
    })
    test('balance test equal to the purchase amount', () => {
        const user: User = {
            name: 'Fernando',
            balance: 100
        }
        const result = purchase(user, 100)
        expect(result).toEqual({ name: 'Fernando', balance: 0 })
    })
    test('balance test less than the purchase amount', () => {
        const user: User = {
            name: 'Eric',
            balance: 50
        }
        const result = purchase(user, 100)
        expect(result).not.toBeDefined()
    })
})