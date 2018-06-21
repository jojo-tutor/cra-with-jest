export function getUsers(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                callback([
                    { id: 1, name: 'John Doe', email: 'john@mailinator.com' },
                    { id: 2, name: 'Sarah Doe', email: 'sarah@mailinator.com' },
                    { id: 3, name: 'Mark Doe', email: 'mark@mailinator.com' }
                ])
            )
        }, 1000)
    })
}

export function fetchNumbers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 1000)
    })
}
