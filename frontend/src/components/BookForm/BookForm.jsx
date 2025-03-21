import { useState } from "react";
import { useDispatch } from "react-redux";
import booksData from "../../data/books.json";
import "./BookForm.css";
import { addBook } from "../../redux/books/actionCreator";
import createBookWithId from "../../utils/createBookWithId";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (author && title) {
         dispatch(addBook(createBookWithId({ title, author })));
         setAuthor("");
         setTitle("");
      }
   };
   const handleRandomBook = () => {
      const randomIndex = Math.floor(Math.random() * booksData.length);
      const randomBook = booksData[randomIndex];

      dispatch(addBook(createBookWithId(randomBook)));
   };

   return (
      <div className="app-block book-form">
         <h2>Add a new book</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Title: </label>
               <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  name="title"
               />
            </div>
            <div>
               <label htmlFor="author">Author: </label>
               <input
                  type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                  name="author"
               />
            </div>
            <button type="submit">Add Book</button>
            <button type="button" onClick={handleRandomBook}>
               Add Random Book
            </button>
         </form>
      </div>
   );
};

export default BookForm;
