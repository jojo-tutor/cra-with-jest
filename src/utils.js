export function getUsers(callback) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve(
                callback([
                    { id: 1, name: 'John Doe', email: 'john@mailinator.com' },
                    { id: 2, name: 'Sarah Doe', email: 'sarah@mailinator.com' },
                    { id: 3, name: 'Mark Doe', email: 'mark@mailinator.com' }
                ])
            )
        })
        
    }, 1000)
}
