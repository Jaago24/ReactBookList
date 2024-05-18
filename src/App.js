import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = async () => {
    await axios.get("http://localhost:3001/books").then((response) => {
    setBooks(response.data);
    });
  };

  useEffect(()=>{
    fetchBooks();
  },[])

  const createBook = async (newBook) => {
    const response = await axios.post("http://localhost:3001/books",{
      title : newBook,
    })
    setBooks([
      ...books,
      response.data
    ]);
  };

  const deleteBook = async(id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    setBooks(books.filter((book) => book.id!== id));
  }
  
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle,
    })
    setBooks(books.map((book) => {
      if(book.id === id){
        return {...book, ...response.data }
      }else {
        return book; // Return unchanged book for other books
      }
    }));
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} onEdit={editBookById} />
      <BookCreate onCreate={createBook}/>
    </div>
  );
}
