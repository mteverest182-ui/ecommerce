import { Navigate, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "../Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Maintenance from "./pages/Maintance";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/shop"
                    element={<Shop />}
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetail />}
                />

                <Route
                    path="/cart"
                    element={<Maintenance />}
                />

                <Route
                    path="/collection"
                    element={<Maintenance />}
                />

                <Route
                    path="/collections"
                    element={<Maintenance />}
                />

                <Route
                    path="/about"
                    element={
                        <Maintenance
                            title="Our Story"
                            description="We are preparing something special for you. Our story will be revealed soon."
                        />
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <Maintenance
                            title="Get In Touch"
                            description="Our contact experience is currently being prepared. We'll be available soon."
                        />
                    }
                />

                <Route
                    path="/shipping"
                    element={
                        <Maintenance
                            title="Shipping"
                            description="Our shipping information and delivery experience are currently being prepared."
                        />
                    }
                />

                {/* =========================
                    FALLBACK
                ========================= */}
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;