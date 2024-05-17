import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
