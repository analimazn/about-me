import React from 'react'
import Informations from '../config/informations_ptBR.json'

export class ProfessionalExperience extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const professionExperience = Informations.professionalExperience.all.map((value, index) => {
      return (
        <div className={ this.props.textAlign } key={ index }>
          <ul className="timeline">
            <li>
              <h6>{ value.company } - { value.occupation }</h6>
              <b>{ value.dateBegin }, { value.dateEnd }</b>
              <br/>
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
                  className={ Informations.professionalExperience.icon } 
                  style={ iconStyle }
                /> 
                {Informations.professionalExperience.title}
              </h4>
            </div>
            { professionExperience }
          </div>
        </div>
      </div>
    )
  }
}
