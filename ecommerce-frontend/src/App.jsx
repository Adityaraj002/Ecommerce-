import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loading } from "./components/Loading";
import { TopHeader } from "./components/TopHeader";
import { HeaderBar } from "./components/HeaderBar";
import { Signup } from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import { PrivacyPolicy } from "./Pages/Privacy";
import store from "./redux/store/store";
import { Wishlist } from "./components/Wishlist";
import { Cart } from "./Pages/Cart";
import { Checkout } from "./Pages/Checkout";

// Lazy-loaded components
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopHeader />
        <HeaderBar />
        {/* Global Toast Notifications */}
        <ToastContainer />

        {/* Route Configuration */}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
