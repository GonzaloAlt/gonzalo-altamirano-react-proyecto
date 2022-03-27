export const sortProductsMin = (products, property) => {
  products.sort(function (a, b) {
    if (a.property < b.property) return -1;

    if (a.property > b.property) return 1;

    return 0;
  });
};

export const sortProductsMax = (products, property) => {
  products.sort(function (a, b) {
    if (a.property < b.property) {
      return 1;
    }
    if (a.property > b.property) {
      return -1;
    }
    return 0;
  });
};
