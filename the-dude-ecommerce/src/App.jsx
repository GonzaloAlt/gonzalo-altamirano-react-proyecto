import "./App.css";
import NavBar from "./Components/NavBar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
    </div>
  );
}

export default App;
