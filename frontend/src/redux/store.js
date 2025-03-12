import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reduces";

const store = configureStore({
   reducer: {
      books: booksReducer,
   },
});

export default store;
