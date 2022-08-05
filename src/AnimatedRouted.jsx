import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Recipes from "./Recipes.jsx";
import Pricing from "./Pricing.jsx";
import Detail from "./Detail.jsx";
import Search from "./Search.jsx";
import {AnimatePresence} from "framer-motion";

const AnimatedRouted = () => {
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="Recipes" element={<Recipes />} />
                    <Route path="Pricing" element={<Pricing />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="search/:id" element={<Search />} />
                </Route>
            </Routes>
        </AnimatePresence>

    )
}
export default AnimatedRouted