import {Link} from "react-router-dom";
import './App.css'
import Footer from "./Footer.jsx";
import {motion} from "framer-motion"

const Main = () => {
    return(
    <main className="landing">
        <div className="content">
            <div className="desc">
                <h1>Let's start cooking with our recipes</h1>
                <p>
                    Want to learn cook but confused how to start? <br/>
                    No need to worry again! we have collected various recipes for you to
                    learn.
                </p>
                <div className="btn-main">
                    <Link to="/recipes">Explore Menu</Link>
                    <Link to="/recipes">
                        Write Recipe
                    </Link>
                </div>
            </div>
            <div className="dua">
                <img id="lightfood" className="food" src="/images/1mainfood.webp" alt="Food in plate"
                     width="430"/>
                <img id="darkfood" className="hidden darkfood" src="/images/1mainfooddark.webp"
                     alt="Food in plate"
                     width="430"/>
            </div>

            <div className="card">
                <div className="image-header">
                    <img src="/images/2secfood.webp" alt="Food recomendation" width="44"/>
                    <h4>Bread Berry</h4>
                </div>
                <p>Bread, Strawberry, Jam, Blueberry, Raspberry</p>
            </div>
        </div>
    </main>
    )
}
const Secmain = () => {
    return(
        <div className="secmain">
            <div className="wilayah">
                <h1 className="sm:text-2xl text-xl mb-8 mt-0 sm:text-left text-center" >Inspiration for your next dish</h1>
                <div className="wrapper">
                    <a href="#/search/minang" className="clash-card cardminang drop-shadow-md hover:drop-shadow-xl transition-all duration-200">
                        <div className="bg minang"></div>
                        <h2 className="judulmasak">Minang</h2>
                        <p className="isimasak">
                            Rendang, Balado, Sate Padang, Soto Padang, Lamang
                        </p>
                    </a>
                    <a href="#/search/java" className="clash-card cardjava drop-shadow-md hover:drop-shadow-xl transition-all duration-200">
                        <div className="bg java"></div>
                        <h2 className="judulmasak">Jawa</h2>
                        <p className="isimasak">
                            Rawon, Pecel, Gudeg, Surabi, Seblak, Tahu Tek, Garang Asem
                        </p>
                    </a>
                    <a href="#/search/healthy" className="clash-card cardhealthy drop-shadow-md hover:drop-shadow-xl transition-all duration-200">
                        <div className="bg healthy"></div>
                        <h2 className="judulmasak">Healthy</h2>
                        <p className="isimasak">We don't do that here</p>
                    </a>
                    <a href="#/search/chinese" className="clash-card cardchinese drop-shadow-md hover:drop-shadow-xl transition-all duration-200">
                        <div className="bg chinese"></div>
                        <h2 className="judulmasak">Chinese</h2>
                        <p className="isimasak">
                            Fuyunghai, Dim Sum, Bebek Peking, Yu Seng, Lun Pia
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}


const Home = () => {

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Main/>
            <Secmain/>
            <Footer/>
        </motion.div>
        )
};

export default Home;