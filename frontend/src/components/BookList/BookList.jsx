import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import "./BookList.css";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreator";
import {
   selectFilterAuthor,
   selectFilterFavorite,
   selectFilterTitle,
} from "../../redux/slices/filterSlice";

const BookList = () => {
   const books = useSelector((state) => state.books) || [];
   const filterTitle = useSelector(selectFilterTitle);
   const filterAuthor = useSelector(selectFilterAuthor);
   const favoriteBooks = useSelector(selectFilterFavorite);

   const dispatch = useDispatch();
   const handleDeleteBook = (id) => {
      dispatch(deleteBook(id));
   };
   const handleToggleFavorite = (id) => {
      dispatch(toggleFavorite(id));
   };
   const filteredBooks = books.filter((book) => {
      const matchesInputs =
         book.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
         book.author.toLowerCase().includes(filterAuthor.toLowerCase());
      const matchesFavorite = favoriteBooks ? book.isFavorite : true;
      return matchesInputs && matchesFavorite;
   });
   const highlightMatch = (textOfBooks, textByInputs) => {
      if (!textByInputs) return textOfBooks;
      const regex = new RegExp(`(${textByInputs})`, "gi");
      return textOfBooks.split(regex).map((substring, i) => {
         if (substring.toLowerCase() === textByInputs.toLowerCase()) {
            return (
               <span key={i} className="highlight">
                  {substring}
               </span>
            );
         } else {
            return substring;
         }
      });
   };
   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 || filteredBooks.length === 0 ? (
            <p>No books available</p>
         ) : (
            <ul>
               {filteredBooks.map((book, i) => (
                  <li key={book.id}>
                     <div className="book-info">
                        {++i}. {highlightMatch(book.title, filterTitle)}
                        {""} by{""}
                        <strong>
                           {highlightMatch(book.author, filterAuthor)}
                        </strong>
                     </div>
                     <div className="book-actions">
                        <div onClick={() => handleToggleFavorite(book.id)}>
                           {book.isFavorite ? (
                              <BsBookmarkStarFill className="star-icon" />
                           ) : (
                              <BsBookmarkStar className="star-icon" />
                           )}
                        </div>
                        <button
                           type="button"
                           onClick={() => handleDeleteBook(book.id)}
                        >
                           Delete
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default BookList;
