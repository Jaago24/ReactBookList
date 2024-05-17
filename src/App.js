import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);
  
  const createBook = (newBook) => {
    setBooks([
      ...books,
      {
        id: Math.floor(Math.random() * 9999),
        title: newBook,
      },
    ]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id!== id));
  }
  
  const editBookById = (id, newTitle) => {
    setBooks(books.map((book) => {
      if(book.id === id){
        return {...book, title: newTitle }
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
