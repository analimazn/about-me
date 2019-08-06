import React from 'react'
import Informations from '../config/informations_ptBR.json'


export class AcademicJourney extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const academicJourney = Informations.academicJourney.all.map((value, index) => {
      return (
        <ul className="timeline" key={ index }>
          <li>
            <h6>{ value.school }</h6>
            <strong>{ value.dateBegin }, { value.dateEnd }</strong>
            <p> { value.course }</p>
          </li>
        </ul>
      )
    })

    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div 
              className="d-flex justify-content-start" 
            >
              <h4>
                <i 
                  className={ Informations.academicJourney.icon } 
                  style={ iconStyle }
                /> 
                {Informations.academicJourney.title}
              </h4>
            </div>
            { academicJourney }
          </div>
        </div>
      </div>
    )
  }
}
