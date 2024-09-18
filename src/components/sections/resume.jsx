import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

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
                                    <Card year={'2024 - Present'} title={'Web Developer - Internship'} institution={'GUSTAVE-AUTO'} />
                                    <Card year={'2024'} title={'Production Operator'} institution={'SONCEBOZ'} />
                                    <Card year={'2018 - 2019'} title={"Crash and Mechanical Technician"} institution={'FLEX-N-GATE'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2024 - Present'} title={'Web Bachelor 3 Infrastructure & IT Systems, Development'} institution={'YNOV CAMPUS STRASBOURG'} />
                                    <Card year={'2024'} title={'Certification C#'} institution={'MICROSOFT'} />
                                    <Card year={'2018 - 2019'} title={"Bachelor's Degree in Sensors, Instrumentation, and Metrology"} institution={'IUT of MONTBÉLIARD'} />
                                    <Card year={'2015 - 2018'} title={'DUT in Physical Measurements'} institution={'IUT of MONTBÉLIARD'} />
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


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
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