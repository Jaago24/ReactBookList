import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/BooksContext";

export default function App() {
  
  const {fetchBooks} = useContext(BookContext);

  useEffect(()=>{
    fetchBooks();
  },[])


  return (
    <div className="app">
      <BookList />
      <BookCreate/>
    </div>
  );
}
