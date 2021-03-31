import React from 'react'
import './style.css'
// import HeadShot from '../Home/HeadShot.jpeg'
import HeadShot from '../Home/HeadShot.jpeg'
import DownloadPic from '../Home/DownloadPic.png'
import Resume from '../Home/Resume.pdf'


function Home() {
    return (
            <div className="container">
                <div>
                    <h2 id="title">About Me</h2>
                </div>
                <div className="row" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div className="card col-12 col-md-6 col-lg-4 col-xl-4" style={{ margin: "0px", border: "none" }}>
                        <div className="card-body" style={{ margin: "0" }}>
                            <img id="headshot" alt="Alex Goldman Headshot" src={HeadShot} style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px" }} />
                        </div>
                    </div>
                    <div className="card col-12 col-md-6 col-lg-7 ol-xl-7" style={{ margin: "0px", border: "none", paddingTop: "50px" }}>
                        <div >
                            Alexandra Goldman was born and raised in Toronto, Ontario. In her childhood she attended the Toronto Heschel School, which strongly instilled a sense of environmental responsibility and an urge to give back to the world.

                            In her final year of high school, she had the opportunity to attend the Neuchatel Junior College in Switzerland. From there, she went on to attend the Smith School of Business at Queen's University - one of Canada's top business schools - for her undergraduate degree. There, she focussed on entrepreneurship and social impact, and graduated with First Class Honours.

                            Alexandra is currently undertaking a Full Stack Coding Bootcamp at the University of Toronto School of Continuing Studies. In April 2021, she will graduate from the program with proficiency in HTML, CSS, JavaScript, Web API's, Node.JS, React, Algorithms, and more.

                            In September 2021, Alexandra will begin Law School at the University of Toronto where she intends to pursue a career in corporate law
                    </div>
                        <p id="downloadResume">Download resume <a href={Resume} title="Download Resume" download="Alex Goldman Resume" ><img className="download" width="30px" height="30px" src={DownloadPic} alt="Resume download button" /></a>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Home