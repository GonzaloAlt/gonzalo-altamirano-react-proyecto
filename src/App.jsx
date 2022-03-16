import "./App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title/Title";
import ItemListContainer from "./Components/ItemListContainer";
import { useEffect } from "react";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar></NavBar>
        </header>
        <Title />
        <ItemListContainer name={"Jeffrey"} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
