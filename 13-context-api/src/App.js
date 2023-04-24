import "bootstrap/dist/css/bootstrap.min.css"

// import in the context
import ProductContext from "./ProductContext";

import ProductListing from "./ProductListing";

import { useState, useMemo } from "react";
import AddProduct from "./AddProduct";

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "ACME Anvils",
      cost: 99.99
    },
    {
      id: 2,
      product_name: "ACME Screwdriver",
      cost: 25.00
    },
    {
      id: 3,
      product_name: "ACME Nails",
      cost: 3.0
    }
  ])

  const context = useMemo(()=>{
    return {
      products: () => {
        return products;
      },
      addProduct: (productName, cost) => {
        setProducts([...products, {
          id: Math.floor(Math.random() * 100000),
          product_name: productName,
          cost: cost
        }])
      }
    }
  }, [products])
  
  
  

  return (
    <div className="container">
      <h1>Products</h1>
      <ProductContext.Provider value={context}>
        <ProductListing />
        <AddProduct />
      </ProductContext.Provider>
    </div>
  )
}

export default App;
