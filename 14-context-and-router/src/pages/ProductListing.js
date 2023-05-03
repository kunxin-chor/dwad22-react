import { useContext } from "react";
import ProductContext from "../ProductContext";
import { Link } from "react-router-dom";

export default function ProductListing() {
    const productContext = useContext(ProductContext)
    return <>
       <h1>Product Listing</h1>
       <ul className="list-group">
            {
                productContext.products().map(
                    p => <li key={p.id}className="list-group-item">
                    {p.product_name}
                <Link className="btn btn-primary btn-sm" to={`/edit/${p.id}`}>Edit</Link>
                    </li>
                )
            }
       </ul>

    </>
}