import React from 'react'
import Informations from '../config/informations_ptBR.json'
import { ProfessionalExperience } from '../views/ProfessionalExperience'
import { VolunteerWork } from '../views/VolunteerWork'
import { Skills } from '../views/Skills'
import { Languages } from '../views/Languages'
import { AcademicJourney } from '../views/AcademicJourney'

export class ProfileInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      width: '',
      marginLeft: ''
    }
    this.resize = this.resize.bind(this)
  }

  resize() {
    if (window.innerWidth >= 768) {
      this.setState({ width: '70%', marginLeft: '25%' })
    } else {
      this.setState({ width: '100%', marginLeft: '' })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  render() {
    const divStyle = {
      backgroundColor: 'transparent',
      positionTop: 'fixed',
      paddingTop: 30,
      marginLeft: this.state.marginLeft,
      width: this.state.width
    }

    return (
      <div>
        <ProfessionalExperience></ProfessionalExperience>
        <VolunteerWork></VolunteerWork>
        <AcademicJourney></AcademicJourney>
        <Languages></Languages>
        <Skills></Skills>
      </div>
    )
  }
}