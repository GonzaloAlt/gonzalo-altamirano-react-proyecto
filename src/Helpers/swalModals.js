import swal from "sweetalert";

export const swalSuccess = (name, count) => {
  swal({
    title: "Producto agregado!",
    text: `Agregaste ${name} X ${count}`,
    icon: "success",
  });
};

export const swalWarning = () => {
  swal({
    title: "No se pudo agregar al carrito!",
    text: `La cantidad ingresada supera al stock`,
    icon: "warning",
  });
};

export const swalEmpty = () => {
  swal({
    title: "Carrito vacío",
    text: `Se ha vaciado su carrito con éxito`,
    icon: "success",
  });
};

export const swalDeleteSucces = (name) => {
  swal(`${name} eliminado`, {
    buttons: false,
    timer: 800,
  });
};
