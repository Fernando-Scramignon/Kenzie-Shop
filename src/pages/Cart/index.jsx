import { Container } from "./style";

import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import CartTotal from "../../components/CartTotal";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Cart() {
  // const cartProducts = useSelector((props) => props.cart);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Header />
      <div className="content">
        <CartTotal />
        {cart.length > 0 && <ProductList products={cart} type="cart" />}
      </div>
    </Container>
  );
}

export default Cart;
