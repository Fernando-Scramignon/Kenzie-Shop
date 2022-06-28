import { useContext } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { ProductsContext } from "../../providers/products.js";
import { Container } from "./style";

function Home() {
  // const products = useSelector((props) => props.products);
  const { products } = useContext(ProductsContext);
  return (
    <Container>
      <Header />
      <ProductList products={products} type="home" />
    </Container>
  );
}

export default Home;
