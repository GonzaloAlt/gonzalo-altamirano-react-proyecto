import "./App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title/Title";
import ItemListContainer from "./Components/ItemListContainer";
import { Page404 } from "./Components/Page404";
import { useEffect } from "react";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import { Cart } from "./Components/Cart";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col justify-between">
        <header>
          <NavBar></NavBar>
        </header>

        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Title />} />
          <Route path="/home" element={<Title />} />
          <Route path="/store" element={<ItemListContainer />} />
          <Route path="/store/:category" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          {/* <Route element={<Page404 />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
