import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./ProductProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductListing from "./pages/ProductListing";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="container">

      <Router>

        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Product</Link>
              </li>
            </ul>
          </div>

        </nav>

        <ProductProvider>
          <Routes>
            {/* Product Listing */}
            <Route path="/" element={<ProductListing />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:productID" element={<EditProduct/>}/>
          </Routes>
        </ProductProvider>
      </Router>

    </div>
  );
}

export default App;
