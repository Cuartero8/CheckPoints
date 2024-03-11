import { useEffect, useState } from 'react'
import './App.css'
import MessageForm from './Components/MessageForm'
import MessagesTable from './Components/MessagesTable'
import { addMessage, deleteMessage, getMessages, updateMessage } from './Services/api'


function App() {

  const [messages, setMessage] = useState([])
  const [edited, setEdited] = useState(null)
  
  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const data = await getMessages()
    setMessage(data)
  }

  const handleSubmit = async (text) => {
    edited
      ? await updateMessage(edited.id, text)
      : await addMessage(text)

    await fetchMessages()
    setEdited(null)
  }

  const handleDelete = async (id) => {
    await deleteMessage(id)
    await fetchMessages()
  }
  const handleEdit = (message) => {
    setEdited(message)
  }
  
  return (
    <>
    <h3>Messages: </h3>
    <MessageForm buttonName={edited ? "Update" : "Add"} onSubmit={handleSubmit} />
    <MessagesTable messages={messages} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App
