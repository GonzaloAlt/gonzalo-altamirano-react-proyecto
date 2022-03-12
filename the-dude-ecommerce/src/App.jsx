import "./App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title/Title";
import ItemListContainer from "./Components/ItemListContainer";
import { useEffect } from "react";
import { Footer } from "./Components/Footer";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <Title />
      <ItemListContainer name={"Jeffrey"} />
      <Footer />
    </div>
  );
}

export default App;
