import React from 'react'
import Project from '../Project'
import Travel from '../Projects/Travel.png'
import Fade from 'react-reveal/Fade';
import WorkDay from '../Projects/WorkDay.png'


function Projects() {
    return (
        <Fade left>
            <div>
                <Project name="Travel App" image={Travel} description="This application was developed with the aim to give any user interested in travelling a tool to compare and evaluate travel destinations. This application displays criteria that we believe to be most relevant when making decisions about travel on each destination page for a consolidated summary of prospective travel destinations. It is a tourism site that utilizes third party APIs, Javascript, Bootstrap and HTML. This project was developed alongside a team of 4 other coders."
                    deploy="https://jonathan-oconnor.github.io/Tourism-App/" repository="https://github.com/Alexgoldman98/Tourism-App" />
                <Project name="Work Day Schedular" image={WorkDay} description="This web application is meant to provide a daily planner to create a schedule. When the user opens the planner, the current date is displayed. Underneath that, the user is presented with colour-coded time blocks that indicate which times of the day have already passed, which are upcoming, and which hour is the present hour. If the time has passed the time block is grey, if it is the present time block it is highlighted red, and anything in the future is highlighted green. The user has the ability to type in the timeblocks and save the text in the timeblock. When the page is refreshed, the text typed and entered stays in the local storage. Only when the user presses"
                    deploy="https://alexgoldman98.github.io/codingQuizHomework4/" repository="https://github.com/Alexgoldman98/workDaySchedulerHW5" />
            </div>
        </Fade>
    )
}

export default Projects