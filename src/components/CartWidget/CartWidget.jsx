const CartWidget = () => {
  return (
    <div>
      <button className="btn btn-primary position-relative">
        <i class="bi bi-cart-fill"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1
          <span className="visually-hidden">Articulos Seleccionados</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
