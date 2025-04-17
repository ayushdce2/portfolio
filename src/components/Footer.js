import "./assets/css/footer.css";
import instagram from "./assets/icons/social/instagram.png";
import linkedin from "./assets/icons/social/linkedin.png";
import wordpress from "./assets/icons/social/wordpress.png";
import youtube from "./assets/icons/social/youtube.png";

const Footer = ()=>{
    let currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footertopWrap">
                <div className="footertopinside">

                    <div className="footerIntroWrap">
                        <div className="footerIntroinside">
                            <div className="footerIntroRow1">
                                <div className="footerIntroRow1symbol">
                                    A
                                </div>
                                <div className="footerIntroRow1text">
                                    <p>Ayush</p>
                                </div>

                            </div>
                            <div className="footerIntroRow2">
                                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>

                            </div>
                            <div className="footerIntroRow3">
                                <a href="/"><img src={linkedin}/></a>
                                <a href="/"><img src={instagram}/></a>
                                <a href="/"><img src={wordpress}/></a>
                                <a href="/"><img src={youtube}/></a>


                            </div>

                        </div>

                    </div>
                    <div className="footerNavWrap">
                        <div className="footerNavinside">
                            <p>Navigation</p>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>

                        </div>

                    </div>
                    <div className="footerContactWrap">
                        <div className="footerContactinside">
                            <p>Contact</p>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>
            <div className="footerbottomWrap">
                <div className="footerbottominside">
                    <div>
                        <p>Copyright &#169; {currentYear} <span className="ayushFooter">Ayush</span> | All Rights Reserved</p>
                    </div>
                    <div>
                        <p>User Terms and Conditions | Privacy Policy</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer;