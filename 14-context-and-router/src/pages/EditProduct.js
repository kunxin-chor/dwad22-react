import { useContext, useEffect } from "react";
import ProductContext from "../ProductContext";
import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function EditProduct() {
    // ALL HOOKS MUST BE CREATED DIRECTLY IN THE FUNCTION
    // YOU CANNOT PUT THEM IN A IF, FUNCTION, FOR etc.
    const productContext = useContext(ProductContext);
    const params = useParams();

    useEffect(()=>{
      
        // we want to get id from the url
        const productId = params.productID;
        const product = productContext.getProductByID(parseInt(productId));
        console.log(product);
        setProductName(product.product_name);
        setCost(product.cost);
        setId(product.id);
    }, [productContext, params.productID])

    const [productName, setProductName] = useState("");
    const [cost, setCost] = useState(0);
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    const createProduct = useCallback(() => {
        productContext.addProduct(productName, cost);
        navigate("/");
    }, [productName, cost, productContext, navigate]);

    return <>
        <h1>Editing Product: {productName}</h1>
        <div>
            <label>Product Name</label>
            <input type="text" className="form-control" value={productName} onChange={e=>setProductName(e.target.value)}/>
        </div>
        <div>
            <label>Cost:</label>
            <input type="number" className="form-control" value={cost} onChange={e=>setCost(e.target.value)}/>
        </div>
        <button className="btn btn-success mt-3" onClick={createProduct}>Create</button>
    </>

}