import React from "react";
import Project from "../Project";
import Travel from "../Projects/Travel.png";
import WorkDay from "../Projects/WorkDay.png";
import Budget from "../Projects/Budget.png";
import Fitness from "../Projects/Fitness.png";
import MoodTracker from "../Projects/MoodTracker.png";


function Projects() {
  return (
      <div>
        <Project
          name="Mood Tracker"
          image={MoodTracker}
          description="Mood tracker is an app that allows users to log their emotions on a daily basis. The app stores each entry in association with the date so that the user can easily navigate back to each entry. Their daily emotions are then graphed, converting their daily mood entries into visual data."
          deploy="https://mood-notes-tracker.herokuapp.com/index.html"
          repository="https://github.com/Humble-Attackers/Group-Mood-Tracker"
        />
        <Project
          name="Fitness Tracker App"
          image={Fitness}
          description="This homework uses heroku and mongo db to store exercise logs that is inputted by the user. The user can keep track of cardio and resistance workouts and that they do, and then can be shown historical data visualization of their workouts."
          deploy="https://fitnesstrackeralexg.herokuapp.com/" 
          repository="https://github.com/Alexgoldman98/fitnessTrackerHW17"
        />
        <Project
          name="Budget Tracker"
          image={Budget}
          description="This app allows users to track their budget offline and online. The app is deployed through Heroku and Data is stored in Mongo DB. The data is stored in local storage while offline and then transferred to storage in Mongo DB when the user comes online again."
          deploy="https://offlineonlinebudgettracker.herokuapp.com/"
          repository="https://github.com/Alexgoldman98/OnlineOfflineBudgetTrackerHW18"
        />
        <Project
          name="Travel App"
          image={Travel}
          description="This application was developed with the aim to give any user interested in travelling a tool to compare and evaluate travel destinations. This application displays criteria that we believe to be most relevant when making decisions about travel on each destination page for a consolidated summary of prospective travel destinations. It is a tourism site that utilizes third party APIs, Javascript, Bootstrap and HTML. This project was developed alongside a team of 4 other coders."
          deploy="https://jonathan-oconnor.github.io/Tourism-App/"
          repository="https://github.com/Alexgoldman98/Tourism-App"
        />
        <Project
          name="Work Day Schedular"
          image={WorkDay}
          description="This web application is meant to provide a daily planner to create a schedule. When the user opens the planner, the current date is displayed. Underneath that, the user is presented with colour-coded time blocks that indicate which times of the day have already passed, which are upcoming, and which hour is the present hour. If the time has passed the time block is grey, if it is the present time block it is highlighted red, and anything in the future is highlighted green. The user has the ability to type in the timeblocks and save the text in the timeblock. When the page is refreshed, the text typed and entered stays in the local storage. Only when the user presses"
          deploy="https://alexgoldman98.github.io/codingQuizHomework4/"
          repository="https://github.com/Alexgoldman98/workDaySchedulerHW5"
        />
      </div>
  );
}

export default Projects;
