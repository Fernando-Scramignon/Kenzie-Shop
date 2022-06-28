import { Container } from "./style";

import ProductCard from "../ProductCard";

import { useContext, useState } from "react";
import { ProductsContext } from "../../providers/products";

import { CartContext } from "../../providers/cart";

function ProductList({ type }) {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1000 ? true : false
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      setIsDesktop(false);
    } else if (window.innerWidth >= 1000) {
      setIsDesktop(true);
    }
  });

  // const products = useSelector((props) => props.products);
  const { products } = useContext(ProductsContext);
  // const cartProducts = useSelector((props) => props.cart);
  const { cart } = useContext(CartContext);

  if (type === "home") {
    return (
      <Container isDesktop={isDesktop}>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            type={type}
            isDesktop={isDesktop}
          />
        ))}
      </Container>
    );
  } else if (type === "cart") {
    return (
      <Container>
        {cart?.map((product, index) => (
          <ProductCard key={index} product={product} type={type} />
        ))}
      </Container>
    );
  }
}

export default ProductList;
