export function getUsers(callback) {
    return new Promise(resolve => {
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
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 1000)
    })
}

export function getCompany() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 100, name: 'Company Inc.', status: 'Active' })
        }, 1000)
    })
}
