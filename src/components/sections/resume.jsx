import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'
import sonceboz from '../../assets/images/entreprise/sonceboz.png'
import gustave from '../../assets/images/entreprise/gustave.jpeg'
import flexNGate from '../../assets/images/entreprise/flexNGate.jpg'
import ynov from '../../assets/images/entreprise/ynov.png'
import microsoft from '../../assets/images/entreprise/microsoft.png'
import iut from '../../assets/images/entreprise/iut.png'
import delfingen from '../../assets/images/entreprise/delfingen.jpg'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2024 - Present'} title={'Web Developer - Internship'} institution={'GUSTAVE-AUTO'} src={gustave} />
                                    <Card year={'2020-2023'} title={'Production Operator'} institution={'SONCEBOZ'} src={sonceboz} />
                                    <Card year={'2019 - 2020'} title={"Mechanical and crash Technician"} institution={'FLEX-N-GATE'} src={flexNGate} />
                                    <Card year={'2019'} title={"Laboratory Technician - Internship"} institution={'DELFINGEN'} src={delfingen} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2024 - Present'} title={'Web Bachelor 3 Infrastructure & IT Systems, Development'} institution={'YNOV CAMPUS STRASBOURG'} src={ynov} />
                                    <Card year={'2024'} title={'Certification C#'} institution={'MICROSOFT'} src={microsoft} />
                                    <Card year={'2018 - 2019'} title={"Bachelor's Degree in Sensors, Instrumentation, and Metrology"} institution={'IUT of MONTBÉLIARD'} src={iut} />
                                    <Card year={'2015 - 2018'} title={'DUT in Physical Measurements'} institution={'IUT of MONTBÉLIARD'} src={iut} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

const Card = ({ year, title, institution, src }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                <img src={src} alt="" width={40} />    
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
} 