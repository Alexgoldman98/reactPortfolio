import React from 'react'
import './style.css'
import Github from '../Contact/Github.png'
import LinkedIn from '../Contact/LinkedIn.png'

function Contact() {
    return (
            <div className="container">
                <div className="contact">
                    <h5>Email</h5>
                    <p className="info">alexgoldman98@gmail.com</p>
                    <h5>Phone Number</h5>
                    <p className="info">(647) 229-0830</p>
                    <h5>Connect with me on</h5>
                    <a href="https://www.linkedin.com/in/alexandra-goldman-857b5a130/" title="LinkedIn" rel="noreferrer" target="_blank" ><img className="info" width="35px" height="33px" src={LinkedIn} alt="linkedIn button referes to Alex's LinkedIn profile" /></a>
                    <a href="https://github.com/Alexgoldman98" rel="noreferrer" title="Github" target="_blank" ><img className="info" width="35px" height="35px" src={Github} alt="Github button referes to Alex's Github profile" /></a>

                </div>
            </div>
    )
}

export default Contact