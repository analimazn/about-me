import React from 'react'
import Informations from '../config/informations_ptBR.json'


export class ProfessionalExperience extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const professionExperience = Informations.professionalExperience.all.map((value, index) => {
      return (
        <div className="card" key={ index }>
          <div 
            className="d-flex justify-content-around" 
            style={{ backgroundColor: '#ececec'}}
          >
            <h4 className="card-title">{ value.company }</h4>
            <h4>{ value.occupation }</h4>
          </div>
          <div className="d-flex justify-content-center p-2">
            <p>{ value.worksWith }</p>
          </div>
          <div className="d-flex justify-content-around p-2">
            <h6>{ value.dateBegin }</h6>
            <h6>{ value.dateEnd }</h6>
          </div>
        </div>
      )
    })

    return (
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <div 
            className="d-flex justify-content-start" 
            key={ Informations.professionalExperience.key }
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
    )
  }
}

