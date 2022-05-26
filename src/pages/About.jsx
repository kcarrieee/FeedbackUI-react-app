import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
    <Card>
      <h1>About this project</h1>
      <p style={{marginBottom: '2rem'}}>This is feedback user interface with React js, using
       Neubrutalism, or Neobrutalism as some people call it, is a mix of regular brutalism in web design and more modern typography, 
       illustration and animation standards.  </p>
      <button className='btn btn-primary'><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Go back home</Link></button>
    </Card>
    </div>
  )
}

export default About