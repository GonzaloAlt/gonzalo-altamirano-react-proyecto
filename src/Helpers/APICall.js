import stock from "../stock.JSON";

export const getProduct = async (id) => {
  const url = stock;
  const response = await fetch(url);
  const data = await response.json();
  return data[id - 1] || data;
};
