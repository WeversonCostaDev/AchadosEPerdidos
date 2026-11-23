import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Hero from "../components/hero/Hero";

function MainLayout(){
    return (
        <>
            <Header />
            <main>
                <Hero/>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;