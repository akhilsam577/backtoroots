import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Categories from "./Components/Categories";
import SearchBar from "./Components/SearchBar";
import ScrollableCards from "./Components/ScrollableCards";

function App() {
  return (
    <div className="">
      {/* <header className="">BACK TO ROOTS</header> */}
      <NavBar />
      <SearchBar />
      <Categories />
      {/* <ScrollableCards /> */}
    </div>
  );
}

export default App;
