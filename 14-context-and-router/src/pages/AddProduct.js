import {useContext, useState, useCallback} from 'react'
import ProductContext from '../ProductContext';
import { useNavigate } from 'react-router-dom';

export default function AddProduct(){
    const productContext = useContext(ProductContext);
    const [productName, setProductName] = useState("");
    const [cost, setCost] = useState(0);

    const navigate = useNavigate();

    const createProduct = useCallback(() => {
        productContext.addProduct(productName, cost);
        navigate("/");
    }, [productName, cost, productContext, navigate]);

    return <>
        <h1>Create New Product</h1>
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
   