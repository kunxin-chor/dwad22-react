import ProductContext from "./ProductContext";
import {useContext} from "react";

export default function ProductListing() {
    // useContext allows the function component
    // to access a context.
    // the argument is the actual context itself
    const productContext = useContext(ProductContext);

    return (<>
        <h2>Product Listing</h2>
        <ul className="list-group">
        {
            productContext.products().map(
                 p => <li className="list-group-item">{p.product_name}</li>
            )
        }
        </ul>
    </>)
}