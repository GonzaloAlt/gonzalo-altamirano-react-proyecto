import "./App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title/Title";
import ItemListContainer from "./Components/ItemListContainer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <Title />
        <ItemListContainer name={"Carlitos"} />
      </header>
    </div>
  );
}

export default App;
