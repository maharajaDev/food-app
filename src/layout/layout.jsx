import { Outlet } from "react-router-dom";
import Navbar from "../components/global/navBar/navbar";
import Footer from "../components/global/footer/footer";
export default function Layout() {
    return (
        <main>
            <Navbar/>
            {<Outlet />}
            <Footer/>
        </main>
    );
}
