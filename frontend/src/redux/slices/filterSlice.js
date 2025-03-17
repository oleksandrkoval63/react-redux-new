import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   title: "",
   author: "",
   favoriteBooks: false,
};

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setFilterTitle: (state, action) => {
         return { ...state, title: action.payload };
      },
      setFilterAuthor: (state, action) => {
         return { ...state, author: action.payload };
      },
      setFilterFavorite: (state) => {
         return { ...state, favoriteBooks: !state.favoriteBooks };
      },
      resetFilters: (state) => {
         return initialState;
      },
   },
});

export const {
   setFilterTitle,
   setFilterAuthor,
   setFilterFavorite,
   resetFilters,
} = filterSlice.actions;

export const selectFilterTitle = (state) => state.filter.title;
export const selectFilterAuthor = (state) => state.filter.author;
export const selectFilterFavorite = (state) => state.filter.favoriteBooks;

export default filterSlice.reducer;
