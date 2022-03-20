import stock from "../stock.JSON";

export const getProductList = async () => {
  const url = stock;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const data = await getProductList();
  return data[id - 1];
};
