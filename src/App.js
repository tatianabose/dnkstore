import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Everything from "./pages/Everything";
import ProductPage from "./pages/ProductPage";
import Description from "./components/Description";
import Additional from "./components/Additional";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/everything" element={<Everything />} />
          <Route
            path="/product/desc"
            element={
              <div>
                <ProductPage />
                <Description />
              </div>
            }
          />
          <Route
            path="/product/add-info"
            element={
              <div>
                <ProductPage />
                <Additional />
              </div>
            }
          />
          <Route
            path="/product/reviews"
            element={
              <div>
                <ProductPage />
                <Reviews />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
