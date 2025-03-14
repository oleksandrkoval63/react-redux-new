import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./BookForm.css";
import { addBook } from "../../redux/books/actionCreator";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (author && title) {
         const book = { title, author, id: uuidv4() };
         dispatch(addBook(book));
         setAuthor("");
         setTitle("");
      }
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
            <button type="submit">Submit Form</button>
         </form>
      </div>
   );
};

export default BookForm;
