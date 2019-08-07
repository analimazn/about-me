import React from 'react'
import { ProfessionalExperience } from '../views/ProfessionalExperience'
import { VolunteerWork } from '../views/VolunteerWork'
import { Skills } from '../views/Skills'
import { Languages } from '../views/Languages'
import { AcademicJourney } from '../views/AcademicJourney'

export class ProfileInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAlign: ''
    }
    this.resize = this.resize.bind(this)
  }

  resize() {
    if (window.innerWidth >= 768) {
      this.setState({ textAlign: 'text-justify'})
    } else {
      this.setState({ textAlign: 'text-left'})
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  render() {
    return (
      <div>
        <ProfessionalExperience 
          textAlign={ this.state.textAlign }>
        </ProfessionalExperience>
        <VolunteerWork
          textAlign={ this.state.textAlign }>
        </VolunteerWork>
        <AcademicJourney
          textAlign={ this.state.textAlign }>
        </AcademicJourney>
        <Languages
          textAlign={ this.state.textAlign }>
        </Languages>
        <Skills 
          textAlign={ this.state.textAlign }>
        </Skills>
      </div>
    )
  }
}
