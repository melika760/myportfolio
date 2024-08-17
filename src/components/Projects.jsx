import React, { useEffect } from 'react'
import useCurrent from './useCurrent'

const Projects = () => {
  const{setsection}=useCurrent()
  useEffect(()=>{
    setsection("Projects")
  },[setsection])
  return (
    <div id='Projects'>
      projects
    </div>
  )
}

export default Projects
