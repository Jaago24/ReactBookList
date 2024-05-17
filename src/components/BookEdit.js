import React, { useState } from "react";

function BookEdit({book, onSubmitFromShow}) {
  const [newBookTitle, setNewBookTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFromShow(book.id,newBookTitle)
  };

  const handleChange = (e) =>{
    setNewBookTitle(e.target.value);
  }

  return (
    <>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" name="title" value={newBookTitle} onChange={handleChange} />
        <button className="button is-primary">save</button>
      </form>
    </>
  );
}

export default BookEdit;
