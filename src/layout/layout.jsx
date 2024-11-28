import { Outlet } from "react-router-dom";
import "./layout.scss"
import Navbar from "../components/global/navBar/navbar";
export default function Layout({ children }) {
    return (
        <main>
            <Navbar/>
            {<Outlet />}
        </main>
    );
}
