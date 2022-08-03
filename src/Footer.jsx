const Footer = () => {
    return(
        <footer id="footer">
            <div className="footerwrapper">
                <div className="footer">
                    <div className="about">
                        <ul>
                            <li>
                                <h1>CookFood</h1>
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
                            <li><a href="#footer">About</a></li>
                            <li><a href="#footer">About Us</a></li>
                            <li><a href="#footer">Receip</a></li>
                            <li><a href="#footer">Download</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#footer">Company</a></li>
                            <li><a href="#footer">Our Receip</a></li>
                            <li><a href="#footer">Subscribe Us</a></li>
                            <li><a href="#footer">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#footer">Support</a></li>
                            <li><a href="#footer">Account</a></li>
                            <li><a href="#footer">Support Center</a></li>
                            <li><a href="#footer">Feedback</a></li>
                            <li><a href="#footer">Accecibility</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#footer">Community</a></li>
                            <li><a href="#footer">Discuss With Us</a></li>
                            <li><a href="#footer">Forum</a></li>
                            <li><a href="#footer">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="down">
                    <p>&#169; 2022 FoodCook,Inc &#183; All right reserved.</p>
                    <div className="tengah">
                        <a href="#footer">Privacy</a>
                        <a href="#footer">Terms</a>
                        <a href="#footer">Cookies</a>
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