import "./assets/css/services.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import lineseparator from "./assets/icons/lineseparator.png";
import playSVG from "./assets/icons/play.svg";
import service from "./assets/icons/service.svg";
import arrowdouble from "./assets/icons/arrowdouble.png";
import pin from "./assets/icons/pin.png";
import "./assets/css/portfolio.css";

const Portfolio = ()=>{
    return (
        <>
            <div className="servicesWrap portfolioWrap" id="myProject">
                <div className="servicesInside">
                    <div className="servicesRow1">
                        <div>
                            <img src={ayushlogo} />
                            {/* <div className="headingUnderline">
                                <img src={lineseparator}/>
                            </div> */}
                        </div>
                        <p> My Portfolio</p>
                    </div>
                    
                    <div className="subheading">
                        <p><span className="servicessubtext">Latest</span> Projects built by me . . .</p>
                        {/* <div className="viewAllButton">
                            <div className="viewMe">
                                <a href="#">View All Projects</a>
                            </div>
                            <div className="playButton">
                                <a href="#">
                                    <img src={playSVG} />
                                </a>
                            </div>

                        </div> */}
                    </div>
                    <div>
                        <div className="servicesMainUnit">
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Admin Dashboard</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>E-commerce</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Food App</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Booking / Appointment App</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Digital Marketing Agency Template</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="portfolioimage">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>NGO Template</p>
                                </div>
                                {/* <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div> */}
                                <div className="portfolioTags">
                                    <div className="portfolioTagUnit">
                                        <p>React.js</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>HTML</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>CSS</p>
                                    </div>
                                    <div className="portfolioTagUnit">
                                        <p>Tailwind</p>
                                    </div>

                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" this is sample paragraph about title "asdfghjkl" </p>

                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>View More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                {/* <img src={pin} className="pinRight"/> */}

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio;