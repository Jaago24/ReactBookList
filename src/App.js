import React,{useState} from'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';

function App() {
  const[books,setBooks] = useState([]);


  const addBook = (newBook) => {
    setBooks([...books,{
      id: Math.round(Math.random()* 9999),
      title: newBook
    }]);
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id!== id));
  }

  const onEditBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return{...book, title: newTitle}
      }
      return book;
    })
    setBooks(updatedBooks);
  };


  return (
    <div className="App">
      <BookList books={books} onDelete={deleteBook} onEditBook={onEditBook}/>
      <BookCreate onCreate={addBook}/>
    </div>
  );
}

export default App;
