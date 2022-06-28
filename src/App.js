import "./App.css";

import Routes from "./Routes";

import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { ProductsProvider } from "./providers/products";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <GlobalStyle />
          <Routes />
          <ToastContainer />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
