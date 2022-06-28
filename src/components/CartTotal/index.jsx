import { Container } from "./style";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function CartTotal() {
  // const cart = useSelector((props) => props.cart);
  const { cart } = useContext(CartContext);

  function roundToTwoDecimals(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function formatPrice(price) {
    return String(price.replace(".", ","));
  }

  return (
    <Container>
      <h3>Resumo do pedido</h3>
      <div className="price">
        {!cart.length ? (
          <>
            <span>Nenhum produto</span>
            <span>R$ 0</span>
          </>
        ) : (
          <>
            <span>{cart.reduce((acc) => acc + 1, 0)} produtos</span>
            <span>
              R${" "}
              {formatPrice(
                roundToTwoDecimals(
                  cart.reduce(
                    (acc, curr) => acc + Number(curr.price * curr.quantity),
                    0
                  )
                )
              )}
            </span>
          </>
        )}
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        FINALIZAR PEDIDO
      </button>
    </Container>
  );
}

export default CartTotal;
