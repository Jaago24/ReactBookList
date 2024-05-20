import useBooksContext from "../hooks/BooksContextHook";
import BookShow from "./BookShow";

export default function BookList() {
  const { books } = useBooksContext();
  
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        BookDetails={book}
      />
    );
  });
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}
