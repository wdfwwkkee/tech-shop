import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Cart from "./components/Pages/Cart/Cart";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishPage from "./components/Pages/Wish/WishPage";
import Catalog from "./components/Pages/Catalog/Catalog";
import CatalogCategory from "./components/Pages/CatalogCategory/CatalogCategory";
import Details from "./components/Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":category">
              <Route index element={<CatalogCategory />} />
              <Route path=":detailItem" element={<Details />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
    </div>
  );
}

export default App;
