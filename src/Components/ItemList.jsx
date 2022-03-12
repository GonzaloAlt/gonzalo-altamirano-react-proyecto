import React from "react";
import { Item } from "./Item";

import defaultImg from "../Imgs/patagonia-kune-sixpack-473.png";
import defaultImg2 from "../Imgs/Temple-Wolf-Ipa-Sixpack-473ml.png";
import defaultImg3 from "../Imgs/Ortuzar-Golden-Ale-473ml.png";
import defaultImg4 from "../Imgs/Ortuzar-Session-Ipa-Americana-473ml.png";
import defaultImg5 from "../Imgs/Quilmes-0.0-Lata-473ml-Sixpack.png";
import defaultImg6 from "../Imgs/Sixpack-Budweiser-473ml.png";
import defaultImg7 from "../Imgs/Sixpack-Miller-473ml.png";
import defaultImg8 from "../Imgs/Stella-Artois-Noire-Sixpack-473ml.png";

export const ItemList = () => {
  const products = [
    {
      id: 1,
      name: "Patagonia Kune SixPack",
      img: defaultImg,
      price: 1150,
      offer: 0,
      ml: 473,
      stock: 9,
    },
    {
      id: 2,
      name: "The Temple IPA SixPack",
      img: defaultImg2,
      price: 1500,
      offer: 13,
      ml: 473,
      stock: 2,
    },
    {
      id: 3,
      name: "Ortuzar Golden Ale",
      img: defaultImg3,
      price: 1250,
      offer: 0,
      ml: 473,
      stock: 15,
    },
    {
      id: 4,
      name: "Ortuzar Session Ipa",
      img: defaultImg4,
      price: 1500,
      offer: 0,
      ml: 473,
      stock: 10,
    },
    {
      id: 5,
      name: "Quilmes 0.0 Lata SixPack",
      img: defaultImg5,
      price: 1350,
      offer: 1,
      ml: 473,
      stock: 15,
    },
    {
      id: 6,
      name: "Budweiser SixPack",
      img: defaultImg6,
      price: 1350,
      offer: 0,
      ml: 473,
      stock: 15,
    },
    {
      id: 7,
      name: "Miller SixPack",
      img: defaultImg7,
      price: 1350,
      offer: 3,
      ml: 473,
      stock: 15,
    },
    {
      id: 8,
      name: "Stella Artois Noire Sixpack",
      img: defaultImg8,
      price: 1350,
      offer: 5,
      ml: 473,
      stock: 15,
    },
  ];

  return products.map((product) => <Item key={product.id} product={product} />);
};
