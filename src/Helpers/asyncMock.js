export const asyncMockProduct = (state) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      state ? res() : rej("No hay productos disponibles para mostrar");
    }, 2000);
  });
};
