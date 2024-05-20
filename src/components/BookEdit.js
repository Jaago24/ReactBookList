import React,{useState} from 'react';
import useBooksContext from "../hooks/BooksContextHook";

export default function BookEdit({title, onSubmit}) {
  const [newTitle, setNewTitle] = useState(title.title);
  const {editBookById } = useBooksContext();

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    onSubmit();
    editBookById(title.id, newTitle);
  };

  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' type='text' value={newTitle} onChange={handleChange}/>
      <button className='button is-primary'>save</button>
      </form>
    </div>
  )
}
