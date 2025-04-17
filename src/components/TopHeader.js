import playSVG from "./assets/icons/play.svg";
import ayushSVG from "./assets/icons/ayush.png";
import servicesseparator from "./assets/icons/servicesseparator.svg";
import instagram from "./assets/icons/social/instagram.png";
import linkedin from "./assets/icons/social/linkedin.png";
import wordpress from "./assets/icons/social/wordpress.png";
import youtube from "./assets/icons/social/youtube.png";

const TopHeader = ()=>{
    return (
        <>
        
            <div className="topheaderMain area">
                <div className="topheaderMainInside">

                
                <div className="topMenu">
                    <div className="brandLogo">
                        <div className="brnadLogoIcon">
                            <p>A</p>
                        </div>
                        <a href="/" className="brandText">Ayush</a>
                    </div>
                    <div className="topMenuList">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Favourite Tools</li>
                            <li>Portfolio</li>
                            
                            {/* <li>HOME</li> */}
                        </ul>

                    </div>
                    <div className="topMenuContact">
                        <a href="/">Contact Me</a>

                    </div>
                    
                </div>

                <div className="topheaderbanner">
                    <div className="topheaderbannerleft">
                        <div className="thbl_row1">
                            <div className="thbl_row1_inside">
                            
                                    <span className="thbl_corner_top"></span>
                                    <span className="thbl_corner_bottom"></span>
                                    <p>Hello There !</p>
                              

                            </div>

                        </div>

                        <div className="thbl_row2">
                            <div className="thbl_row2_inside">
                            
                                    <p>I'm <span className="myName">Ayush,</span></p>
                                    <p>Product Designer</p>
                                    <p>Based in India.</p>
                              

                            </div>

                        </div>

                        <div className="thbl_row3">
                            <div className="thbl_row3_inside">
                            
                                    <p>I'm an experienced Product Designer with 18+ years in the field, collaborating with various companies and startups.</p>
                              
                            </div>

                        </div>

                        <div className="thbl_row5">
                            <div className="thbl_row5_inside">
                                <a href="/"><img src={linkedin}/></a>
                                <a href="/"><img src={instagram}/></a>
                                <a href="/"><img src={wordpress}/></a>
                                <a href="/"><img src={youtube}/></a>

                            </div>

                        </div>

                        <div className="thbl_row4">
                            <div className="thbl_row4_inside">
                                <div className="thbl_row4_button_wrap">
                                    <div className="viewMe">
                                        <a href="/about" className="thbl_button">Download CV</a>
                                    </div>
                                    <div className="playButton">
                                        <a href="/contact" className="thbl_button">
                                            <img src={playSVG}/>
                                        </a>
                                    </div>

                                </div>
                                <div className="thbl_row4_hireMe">
                                    <p>Hire Me</p>

                                </div>
                                                          
                            </div>

                        </div>
                        
                        

                    </div>
                    <div className="topheaderbannerright">
                        <div className="topheaderbannerright_inside">
                            <img src={ayushSVG}/>
                            <div className="thbr_website_text">
                                <p>Digital Marketing</p>
                            </div>
                            <div className="thbr_marketing_text">
                                <p>Website Development</p>
                            </div>
                        </div>
                        

                    </div>

                </div>
                <div className="services_list">
                            <div className="services_list_inside">
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>App Design</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Website Design</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Dashboard</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>App Design</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Website Design</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Dashboard</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>


                            </div>

                        </div>
                        <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

            </div>
            </div>
            
       
            
        </>
    )
}

export default TopHeader;