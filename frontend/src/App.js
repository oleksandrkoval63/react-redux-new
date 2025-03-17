import "./App.css";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import BookFilter from "./components/BookFilter/BookFilter";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1>Book Library App</h1>
         </header>
         <main className="app-main">
            <div className="app-left-column">
               <BookForm />
            </div>
            <div className="app-right-column">
               <BookFilter />
               <BookList />
            </div>
         </main>
      </div>
   );
}

export default App;
