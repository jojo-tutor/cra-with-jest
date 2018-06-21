import { getUsers, fetchNumbers, getCompany } from './utils'

describe('Test - ', () => {
    test('the object assignment', () => {
        let object1 = { a: 1, b: 1 }
        let object2 = {}
        object2 = { ...object1 }
        object1.a = 2
        expect(object1).toEqual({ a: 2, b: 1 })
        expect(object2).toEqual({ a: 1, b: 1 })
    })
    
    test('the async with callback', done => {
        function callback(data) {
            expect(Array.isArray(data)).toBe(true)
            expect(data.length).toBe(3)
            done()
        }
        getUsers(callback)
    })

    test('the async with promise', () => {
        return fetchNumbers().then(numbers => {
            expect(Array.isArray(numbers)).toBeTruthy()
            expect(numbers.length).toBe(5)
            expect(numbers).toEqual([1, 2, 3, 4, 5])
        })
    })

    test('the async with async/await', async () => {
        const company = await getCompany()
        expect(typeof company).toBe('object')
        expect(Array.isArray(company)).toBeFalsy()
        expect(company.id).toBeTruthy()
    })
})