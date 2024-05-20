import {useState, createContext} from 'react';
import axios from "axios";


const BookContext = createContext();

    function ProviderCustom({children}) {


      const [books, setBooks] = useState([]);
  
      const fetchBooks = async () => {
        await axios.get("http://localhost:3001/books").then((response) => {
        setBooks(response.data);
        });
      };

      const createBook = async (newBook) => {
        const response = await axios.post("http://localhost:3001/books",{
          title : newBook,
        })
        setBooks([
          ...books,
          response.data
        ]);
      };
    
      const deleteBook = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(books.filter((book) => book.id!== id));
      }
      
      const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
          title : newTitle,
        })
        setBooks(books.map((book) => {
          if(book.id === id){
            return {...book, ...response.data }
          }else {
            return book; // Return unchanged book for other books
          }
        }));
      };


      
      const valuesToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBook,
        editBookById,
      }

        return(
            <BookContext.Provider value={valuesToShare}>
                {children}
            </BookContext.Provider>
        )
    };

export {ProviderCustom};
export default BookContext;
