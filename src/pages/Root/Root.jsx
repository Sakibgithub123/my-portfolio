import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";


const Root = () => {
    return (
        <div className="bg-[#000000]">
            <NavBar></NavBar>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;