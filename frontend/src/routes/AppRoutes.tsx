import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Account from "../pages/account";
import Register from "../pages/Register";


// Define as rotas e quais páginas devem ser exibidas.
function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;