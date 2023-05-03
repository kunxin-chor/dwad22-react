import ProductContext from "./ProductContext";
import {useState, useMemo} from 'react'

export default function ProductProvider(props) {
    
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
      getProductByID:(productId) => {
        return products.find(p => p.id === productId)
      },
      addProduct: (productName, cost) => {
        setProducts([...products, {
          id: Math.floor(Math.random() * 100000),
          product_name: productName,
          cost: cost
        }])
      }
    }
  }, [products]);


  return (
    <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>
  )

}