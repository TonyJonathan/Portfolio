import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.png"
import html from "../../assets/images/client-logos/html.png"
import css from "../../assets/images/client-logos/css.png"
import javascript from "../../assets/images/client-logos/javascript.png"
import react from "../../assets/images/client-logos/react.png"
import php from "../../assets/images/client-logos/php.png"
import csharp from "../../assets/images/client-logos/csharp.png"
import dotnet from "../../assets/images/client-logos/dotnet.png"
import mysql from "../../assets/images/client-logos/mysql.png"
import docker from "../../assets/images/client-logos/docker.png"
import wordpress from "../../assets/images/client-logos/wordpress.png"
import SlideUp from '../../utlits/animations/slideUp';

const carousel_images = [html, css, javascript, react, php, csharp, dotnet, mysql, docker, wordpress] 

const Hero = () => {
    
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Tony Bruchon</h2>
                                <p>I am a Web Developper based in Schiltigheim.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/in/bruchon/"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to="https://github.com/TonyJonathan/"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Tony Bruchon, I like to code things from scratch and enjoy bringing ideas to life in the browser.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i>Available for an apprenticeship</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href="../../../public/CV.pdf" className="theme-btn" download>Download CV <i><RiDownloadLine size={16} /></i> </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Technologies I Worked With</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                {carousel_images.map((srcImg) => {
                                                    return <img src={srcImg} alt="" height={50} />
                                                })}
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero