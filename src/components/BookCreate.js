import React, { useState } from "react";
import useBooksContext from "../hooks/BooksContextHook";

export default function BookCreate() {
  const {createBook} = useBooksContext();
  
  const [bookTitle, setBookTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookTitle);
    setBookTitle("");
  };

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={bookTitle}
          onChange={handleChange}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
