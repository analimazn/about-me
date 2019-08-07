import React from 'react'
import Informations from '../config/informations_ptBR.json'
import { SocialNetworkNav } from './SocialNetworkNav'

export class ProfilePhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      position: '',
      positionTop: ''
    }
    this.resize = this.resize.bind(this)
  }

  resize() {
    if (window.innerWidth >= 768) {
      this.setState({ position: 'fixed' })
      this.setState({ positionTop: '' })
    } else {
      this.setState({ position: '' })
      this.setState({ positionTop: 'fixed' })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  render() {
    const urlProfilePhoto = require("../assets/img/profile/analima.jpg")
    const divStyle = {
      position: this.state.position,
      positionTop:  this.state.positionTop
    }

    return (
      <div className="col-md-3 col-md-offset-6" style={ divStyle }>
        <div className="container">
          <div className="owner">
            <div className="avatar">
              <img 
                src={ urlProfilePhoto } 
                alt="Circle" 
                className="img-circle img-no-padding img-responsive"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3>{ Informations.name }</h3>
          <br />
          <h6>{ Informations.contact.email }</h6>
          <SocialNetworkNav></SocialNetworkNav>
        </div>
      </div>
    )
  }
}

