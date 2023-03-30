
import React from 'react'
import ProjectCardData from './ProjectCardData'
import ProjectCard from "./ProjectCard";
// import ProjectPop from './ProjectPop'

const Project1 = () => {
  return (
    <div className='container'>
        <h1 className='project-heading'>Project</h1>
        <div className='project-container'>
            {ProjectCardData.map((val, ind) => {
                return(
                    <ProjectCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text} 
                        view={val.view}
                        source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Project1;