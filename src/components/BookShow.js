import React,{useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/BooksContextHook";



export default function BookShow({ BookDetails}) {
  const[open,setOpen] = useState(false);
  const {deleteBook } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBook(BookDetails.id);
  };

  const handleSubmit = () =>{
    setOpen(false);
  }

  let content = <h3>{BookDetails.title}</h3>
  if(open){
    content =  <BookEdit title={BookDetails} onSubmit={handleSubmit}/>
  }

  const handleEdit = () => {
    setOpen(!open);
  };


  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${BookDetails.id}/300/200`} />
      <div className="actions">
      <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      {content}
    </div>
  );
}
