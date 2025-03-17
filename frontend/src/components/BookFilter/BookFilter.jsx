import { useDispatch, useSelector } from "react-redux";
import {
   selectFilterTitle,
   resetFilters,
   setFilterTitle,
   selectFilterAuthor,
   setFilterAuthor,
   selectFilterFavorite,
   setFilterFavorite,
} from "../../redux/slices/filterSlice";
import "./BookFilter.css";

const BookFilter = () => {
   const dispatch = useDispatch();
   const filterTitle = useSelector(selectFilterTitle);
   const filterAuthor = useSelector(selectFilterAuthor);
   const favoriteBooks = useSelector(selectFilterFavorite);
   const handleTitleFilterChange = (e) => {
      dispatch(setFilterTitle(e));
   };
   const handleAuthorFilterChange = (e) => {
      dispatch(setFilterAuthor(e));
   };
   const handleChangeFavoriteBooks = () => {
      dispatch(setFilterFavorite());
   };
   const handleResetFilters = () => {
      dispatch(resetFilters());
   };
   return (
      <div className="app-block filter">
         <div className="filter-row">
            <div className="filter-group">
               <input
                  type="text"
                  placeholder="Filter by title..."
                  value={filterTitle}
                  onChange={(e) => handleTitleFilterChange(e.target.value)}
               />
            </div>
            <div className="filter-group">
               <input
                  type="text"
                  placeholder="Filter by author..."
                  value={filterAuthor}
                  onChange={(e) => handleAuthorFilterChange(e.target.value)}
               />
            </div>
            <div className="filter-group">
               <label htmlFor="favorite">Only Favorite</label>
               <input
                  type="checkbox"
                  name="favorite"
                  checked={favoriteBooks}
                  onChange={handleChangeFavoriteBooks}
               />
            </div>
            <div className="filter-group">
               <button type="button" onClick={handleResetFilters}>
                  Reset Filters
               </button>
            </div>
         </div>
      </div>
   );
};

export default BookFilter;
