import "./assets/css/services.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import lineseparator from "./assets/icons/lineseparator.png";
import playSVG from "./assets/icons/play.svg";
import service from "./assets/icons/service.png";
import arrowdouble from "./assets/icons/arrowdouble.png";
import pin from "./assets/icons/pin.png";

const Services = ()=>{
    return (
        <>
            <div className="servicesWrap">
                <div className="servicesInside">
                    <div className="servicesRow1">
                        <div>
                            <img src={ayushlogo} />
                            {/* <div className="headingUnderline">
                                <img src={lineseparator}/>
                            </div> */}
                        </div>
                        <p> Services</p>
                    </div>
                    
                    <div className="subheading">
                        <p><span className="servicessubtext">Services</span> I Provide are</p>
                        <div className="viewAllButton">
                            <div className="viewMe">
                                <a href="#">View All Services</a>
                            </div>
                            <div className="playButton">
                                <a href="#">
                                    <img src={playSVG} />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="servicesMainUnit">
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Service Name</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div>
                                <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div>
                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Service Name</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div>
                                <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div>

                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Service Name</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div>
                                <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div>

                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Service Name</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                    <p>Service Description Service Description Service Description Service Description Service Description </p>
                                </div>
                                <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div>

                                <img src={pin} className="pinRight"/>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Services;