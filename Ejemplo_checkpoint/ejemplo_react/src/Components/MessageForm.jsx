/* eslint-disable react/prop-types */
import { useState } from "react"

export default function MessageForm({ buttonName, onSubmit }) {

    const [text, setText] = useState({
        id: "",
        text: ""
    })

    function handleInput(event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(text)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleInput} />
            <button type="submit">{buttonName}</button>
        </form>
    )
}