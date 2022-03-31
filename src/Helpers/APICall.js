import stock from "../stock.JSON";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../Utils/firebase";

// export const getProductList = async () => {
//   const url = stock;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// export const getProduct = async (id) => {
//   const data = await getProductList();
//   return data[id - 1];
// };

export const getDBProductList = async () => {
  const query = collection(db, "items");
  const response = await getDocs(query);
  const dataItems = response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return dataItems;
};

export const getDBProduct = async (id) => {
  const q = doc(db, "items", id);
  const response = await getDoc(q);
  const data = { id: response.id, ...response.data() };
  return data;
};

export const getDBCategory = async (category) => {
  const itemsRef = collection(db, "items");
  const qvalue = query(itemsRef, where("itemType", "==", category));
  const qkey = query(itemsRef, where(category, ">", 0));

  const querySnapshot =
    category !== "offer" ? await getDocs(qvalue) : await getDocs(qkey);

  const dataItems = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return dataItems;
};
