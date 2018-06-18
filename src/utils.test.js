test('object assignment', () => {
    let object1 = { a: 1, b: 1 }
    let object2 = {}
    object2 = { ...object1 }
    object1.a = 2
    expect(object1).toEqual({ a: 2, b: 1 })
    expect(object2).toEqual({ a: 1, b: 1 })
})

test('testing callbacks', () => {

})