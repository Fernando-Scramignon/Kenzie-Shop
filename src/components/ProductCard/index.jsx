import { Container } from "./style";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function ProductCard({ product, type, isDesktop }) {
  // const cartProducts = useSelector((props) => props.cart);
  const { cart, addProduct, removeProduct } = useContext(CartContext);
  const { name, img, price, quantity } = product;

  function formatPrice(price) {
    const formatedPrice = `R$ ${price}`;
    if (formatedPrice.includes(".")) {
      return formatedPrice.replace(".", ",");
    } else {
      return formatedPrice;
    }
  }

  function addtoCartMessage() {
    toast.success("Adicionado com sucesso", {
      position: toast.POSITION.TOP_LEFT,
    });
  }

  function removeFromCartMessage() {
    toast.success("Removido com sucesso", {
      position: toast.POSITION.TOP_LEFT,
    });
  }

  if (type === "home") {
    return (
      <Container isDesktop={isDesktop}>
        <img src={img} alt="book" />
        <h2>{name}</h2>
        <span>{formatPrice(price)}</span>
        <button
          onClick={() => {
            addtoCartMessage();
            addProduct(product);
          }}
        >
          Add to cart
        </button>
      </Container>
    );
  } else if (type === "cart") {
    return (
      <>
        {cart.length && (
          <Container>
            <img src={img} alt="book" />
            <h2>{name}</h2>
            <div className="priceDiv">
              <span>{formatPrice(price)}</span>
              <span>{quantity}x</span>
            </div>
            <button
              onClick={() => {
                removeFromCartMessage();
                removeProduct(product);
              }}
            >
              Remove from cart
            </button>
          </Container>
        )}
      </>
    );
  }
}

export default ProductCard;
