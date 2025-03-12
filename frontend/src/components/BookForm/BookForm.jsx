import { useState } from "react";
import "./BookForm.css";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (author && title) {
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
