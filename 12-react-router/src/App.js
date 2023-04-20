
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SubmittedForm from './pages/SubmittedForm';

function App() {

  return (
    <div className="container">
      {/* <Router> defines where the routing can occur */}
      <Router>

        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

        </nav>

        {/* <Routes> the area where the "page" is displayed */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={
            <Home />
          } />

          {/* About Us */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Contact Us */}
          <Route path="/contact-us" element={
            <ContactUs />
          } />

          {/* SubmittedForm */}
          <Route path="/submitted" element={<SubmittedForm />} />

        </Routes>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="text-muted">© 2021 Company, Inc</span>
            </div>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
