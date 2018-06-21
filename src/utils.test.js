import { getUsers, fetchNumbers } from './utils'

describe('Utils Test', () => {
    test('object assignment', () => {
        let object1 = { a: 1, b: 1 }
        let object2 = {}
        object2 = { ...object1 }
        object1.a = 2
        expect(object1).toEqual({ a: 2, b: 1 })
        expect(object2).toEqual({ a: 1, b: 1 })
    })
    
    test('testing callbacks', done => {
        function callback(data) {
            expect(Array.isArray(data)).toBe(true)
            expect(data.length).toEqual(3)
            done()
        }
        getUsers(callback)
    })

    test('testing promise', () => {
        return fetchNumbers().then(data => {
            expect(Array.isArray(data)).toBeTruthy()
            expect(data.length).toEqual(5)
            expect(data).toEqual([1, 2, 3, 4, 5])
        })
    })
})