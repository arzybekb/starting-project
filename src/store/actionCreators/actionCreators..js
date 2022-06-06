// {type: 'increment'}

export const INCREMENT = 'INCREMENT'
 
export function increment () {
    return {
        type: 'INCREMENT'
    }
}

export function login (id) {
    return {
        type: 'LOGIN',
        loginId: id
    }
}

export function asycnIncrement () {
    return async (dispatch) => {
        // fetch
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}

export function asyncLogin  (userCredentials) {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })

        const data = await res.json()
        dispatch(login(data.id))
    }
}