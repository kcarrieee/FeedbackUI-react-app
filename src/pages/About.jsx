import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
    <Card>
      
      <h1>About this project</h1>
      <p>This is feedback user interface with react </p>
      <p><Link to='/'>Go back home</Link></p>
    
    </Card>
    </div>
  )
}

export default About