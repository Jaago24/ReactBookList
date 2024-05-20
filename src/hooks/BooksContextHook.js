import { useContext } from "react";
import BookContext from "../context/BooksContext";


function useBooksContext() {
    return useContext(BookContext);
}

export default useBooksContext;