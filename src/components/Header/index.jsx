import { Container } from "./style";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Header() {
  const history = useHistory();
  function cartButtonRedirect() {
    history.location.pathname === "/cart"
      ? history.push("/")
      : history.push("/cart");
  }

  const { cart } = useContext(CartContext);

  return (
    <Container>
      <div className="logo">
        <h1>Kenzie Shop</h1>
        <span>books</span>
      </div>
      <div className="buttonsDiv">
        <button>
          {cart.length > 0 && (
            <div className="circle">
              {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
            </div>
          )}
          <FiShoppingCart
            onClick={cartButtonRedirect}
            size={25}
            color={"#9D9D9D"}
          />
        </button>
        <button>
          <FiLogOut size={25} color={"#9D9D9D"} />
        </button>
      </div>
    </Container>
  );
}

export default Header;
