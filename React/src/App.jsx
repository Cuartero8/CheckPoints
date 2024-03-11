import { useEffect, useState } from 'react'
import './App.css'
import BookTable from './Components/BookTable'


function App() {
  
  const URL_ROOT = "http://localhost:3000/books"

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {const res = await fetch(URL_ROOT)
    const data = await res.json()
    setBooks(data)} catch(err) {console.log(err)}
  }

  const delBook = async (id) => {
    try {
     await fetch(`${URL_ROOT}/${id}`, {
      method: "DELETE"
     })
     await fetchBooks()
    }catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <BookTable books={books} handleDelete={delBook} />
    </>
  )
}

export default App
