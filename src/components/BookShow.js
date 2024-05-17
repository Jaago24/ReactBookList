import React,{useState} from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ BookDetails, onDelete, onEdit }) {
  const[open,setOpen] = useState(false);

  const handleClick = () => {
    onDelete(BookDetails.id);
  };

  const handleSubmit = (id, newTitle) =>{
    setOpen(false);
    onEdit(id, newTitle);
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
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
      {content}
    </div>
  );
}
