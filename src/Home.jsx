import {Link} from "react-router-dom";
import './App.css'
import Footer from "./Footer.jsx";

import mySvg from '/images/social/fb.svg'
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
                <h1 className="text-2xl mb-4" >Inspiration for your next dish</h1>
                <div className="wrapper">
                    <div className="clash-card cardminang">
                        <div className="bg minang"></div>
                        <h2 className="judulmasak">Minang</h2>
                        <p className="isimasak">
                            Rendang, Balado, Sate Padang, Soto Padang, Lamang
                        </p>
                    </div>
                    <div  className="clash-card cardjava">
                        <div className="bg java"></div>
                        <h2 className="judulmasak">Jawa</h2>
                        <p className="isimasak">
                            Rawon, Pecel, Gudeg, Surabi, Seblak, Tahu Tek, Garang Asem
                        </p>
                    </div>
                    <div  className="clash-card cardhealthy">
                        <div className="bg healthy"></div>
                        <h2 className="judulmasak">Healthy</h2>
                        <p className="isimasak">We don't do that here</p>
                    </div>
                    <div  className="clash-card cardchinese">
                        <div className="bg chinese"></div>
                        <h2 className="judulmasak">Chinese</h2>
                        <p className="isimasak">
                            Fuyunghai, Dim Sum, Bebek Peking, Yu Seng, Lun Pia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Home = () => {

    return(
        <>
            <Main/>
            <Secmain/>
            <Footer/>
        </>

        )


};



export default Home;