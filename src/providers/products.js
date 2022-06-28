import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([
    {
      name: "Box 1 Agatha Christie",
      price: "69.90",
      img: "https://images-na.ssl-images-amazon.com/images/I/71Q3szH3U4L.jpg",
      id: 1,
      quantity: 1,
    },
    {
      name: "Box 2 Agatha Christie",
      price: "69.90",
      img: "https://images-na.ssl-images-amazon.com/images/I/71LTfZVXrxL.jpg",
      id: 2,
      quantity: 1,
    },
    {
      name: "Box 3 Agatha Christie",
      price: "62.90",
      img: "https://images-na.ssl-images-amazon.com/images/I/61MDoTGJTCL.jpg",
      id: 3,
      quantity: 1,
    },
    {
      name: "Box 4 Agatha Christie",
      price: "56.80",
      img: "https://images-na.ssl-images-amazon.com/images/I/91rAkxdpXwL.jpg",
      id: 4,
      quantity: 1,
    },
    {
      name: "Box 5 Agatha Christie",
      price: "79.50",
      img: "https://images-na.ssl-images-amazon.com/images/I/81Gp+S+BtxL.jpg",
      id: 5,
      quantity: 1,
    },
    {
      name: "Box 6 Agatha Christie",
      price: "59.90",
      img: "https://images-na.ssl-images-amazon.com/images/I/81TNssVQ41L.jpg",
      id: 6,
      quantity: 1,
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
