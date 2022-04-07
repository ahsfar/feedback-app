import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
          <h1>About Project</h1>
          <p>Testing about page</p>
          <p>version: 1.0.0</p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
      </div>
    </Card>
  )
}

export default AboutPage
