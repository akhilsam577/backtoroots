import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Categories from "./Components/Categories";
import SearchBar from "./Components/SearchBar";
import ScrollableCards from "./Components/ScrollableCards";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";

function App() {
  return (
    <div className="">
      {/* <header className="">BACK TO ROOTS</header> */}
      <NavBar />
      <Scroller />
      <SearchBar />

      <Categories />
      {/* <ScrollableCards /> */}
      <Footer />
    </div>
  );
}

export default App;
