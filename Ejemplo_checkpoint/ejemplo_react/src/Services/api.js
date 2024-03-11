const URL_ROOT = "http://localhost:3000/messages"


export const getMessages = async () => {
    const res = await fetch(URL_ROOT)
    const data = await res.json()
    return data
}

export const addMessage = async  (text) => {
    const res = await fetch(`${URL_ROOT}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({text})
    })
    return res.ok
}

export const updateMessage = async  (id, text) => {
    const res = await fetch(`${URL_ROOT}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({text})
    })
    return res.ok
}

export const deleteMessage = async  (id) => {
    const res = await fetch(`${URL_ROOT}/${id}`, {
        method: 'DELETE'
    })
    return res.ok
}