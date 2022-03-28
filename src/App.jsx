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
import { CartContextProvider } from "./Context/CartContext";
import { Favourites } from "./Components/Favourites";
import { FavouritesContextProvider } from "./Context/FavouritesContext";

function App() {
  useEffect(() => {
    document.title = "The Dude Home";
  }, []);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col justify-between">
          <header>
            <NavBar></NavBar>
          </header>
          <FavouritesContextProvider>
            <Routes>
              <Route path="*" element={<Page404 />} />
              <Route path="/" element={<Title />} />
              <Route path="/home" element={<Title />} />
              <Route path="/store" element={<ItemListContainer />} />
              <Route path="/store/:category" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </FavouritesContextProvider>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
