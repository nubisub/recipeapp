import {useEffect, useState} from "react";

const Footer = () => {
    const [year, setYear] = useState()
    useEffect(()=>{
        const d = new Date();
        let day = d.getFullYear();
        setYear(day)
        },[]
    )

    return(
        <footer id="footer">
            <div className="footerwrapper">
                <div className="footer">
                    <div className="about">
                        <ul>
                            <li>
                                <h1 className="text-3xl font-bold" >CookFood</h1>
                            </li>
                            <li>
                                <p>
                                    CookFood is an appllication used to find a variety of famous
                                    food and drink recipes
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Receip</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Our Receip</a></li>
                            <li><a href="#">Subscribe Us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Accecibility</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Discuss With Us</a></li>
                            <li><a href="#">Forum</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="down">
                    <p>&#169; {year} FoodCook,Inc &#183; All right reserved.</p>
                    <div className="tengah">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                    <div className="social">
                        <a href="#">
                            <img className="soc" src="/images/social/fb.svg" alt="asdf"/>
                        </a>
                        <a href="#">
                            <img className="soc" src="/images/social/twit.svg" alt="asdf"/>

                        </a>
                        <a href="#">
                            <img className="soc" src="/images/social/ig.svg" alt="asdf"/>
                        </a>
                        <a href="https://github.com/nubisub">
                            <img className="soc" src="/images/social/gh.svg" alt="asdf"/>

                        </a>
                    </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer;