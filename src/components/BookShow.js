import React, {useState} from'react';
import BookEdit from './BookEdit';

function BookShow({ onDelete, book, onEditBook }) {
 const [edit, setEdit] = useState(false);


  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleSubmit = (id, newTitle) => {
    setEdit(false);
    onEditBook(id, newTitle);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if(edit){
    content = <BookEdit book={book} onSubmitFromShow={handleSubmit}/> 
  }

  return (
    <>
      <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200/`}/>
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Delete
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default BookShow;
