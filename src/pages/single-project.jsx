import React from 'react'
import singleProjectImg from "../assets/images/projects/single-project.jpg"
import singleProject1 from "../assets/images/projects/single-project1.jpg"
import singleProject2 from "../assets/images/projects/single-project2.jpg"
import singleProject3 from "../assets/images/projects/single-project3.jpg"
import singleProject4 from "../assets/images/projects/single-project4.jpg"
import { useParams } from 'react-router'
import { projectsData } from '../utlits/fackData/projectData'

const SingleProject = () => {
    const { id } = useParams()
    const project = projectsData.find(el => +el.id === +id)
    if (!project) return null;

    return (
        <div class="single-project-page-design">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center pb-30">
                        <p>BRANDING - BENTO STUDIO</p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div class="single-project-image">
                <img src={project.src} alt="image" />
            </div>
            <div class="container pt-30">
                <div class="row">
                    <div class="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div class="single-project-page-left wow fadeInUp delay-0-2s">
                            <div class="single-info">
                                <p style={{ marginBottom: 30 }}>Technologies</p>
                                <h3>{project.technologies.map(technologie => <p style={{ marginBottom: 10 }}>{technologie}</p>)}</h3>
                            </div>
                            {/* <div class="single-info">
                                <p>Client</p>
                                <h3>Bento Studio</h3>
                            </div>
                            <div class="single-info">
                                <p>Services</p>
                                <h3>Web Design</h3>
                            </div>
                            <div class="single-info">
                                <p>Project</p>
                                <h3>Creative</h3>
                            </div> */}
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div class="col-lg-8">
                        <div class="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            {project.description?.map(desc => <p>{desc}</p>)}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
            </div>
        </div>
    )
}

export default SingleProject