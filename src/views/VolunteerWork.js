import React from 'react'
import Informations from '../config/informations_ptBR.json'

export class VolunteerWork extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const volunteerWork = Informations.volunteerWork.all.map((value, index) => {
      return (
        <div className={ this.props.textAlign } key={ index }>
          <ul className="timeline">
            <li>
              <h6>{ value.event } - { value.occupation }</h6>
              <b>{ value.years }</b>
              <br/>
              <p>{ value.about }</p>
              <p>{ value.worksWith }</p>
            </li>
          </ul>
        </div>
      )
    })

    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-8 offset-md-3">
            <div 
              className="d-flex justify-content-start" 
            >
              <h4>
                <i 
                  className={ Informations.volunteerWork.icon } 
                  style={ iconStyle }
                /> 
                {Informations.volunteerWork.title}
              </h4>
            </div>
            { volunteerWork }
          </div>
        </div>
      </div>
    )
  }
}
