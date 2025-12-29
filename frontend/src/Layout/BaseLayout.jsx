import { Outlet } from "react-router-dom";
import Header from "../Components/Bars/Header";
import Footer from "../Components/Home/Footer";

const BaseLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default BaseLayout;
