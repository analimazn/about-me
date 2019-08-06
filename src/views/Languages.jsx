import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import Informations from '../config/informations_ptBR.json'


export class Languages extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const languages = Informations.languages.all.map((value, index) => {
      return (
        <ul className="timeline" key={ index }>
          <li>
            <h6>{ value.idiom }</h6>
              <p>{ value.titleRead }
                <ProgressBar animated now={ value.percentageRead } />
              </p>
              <p>{ value.titleWriter }
                <ProgressBar animated now={ value.percentageWriter } />
              </p>
              <p>{ value.titleConversation }
                <ProgressBar animated now={ value.percentageConversation } />
              </p>
          </li>
        </ul>
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
                  className={ Informations.languages.icon } 
                  style={ iconStyle }
                /> 
                {Informations.languages.title}
              </h4>
            </div>
            { languages }
          </div>
        </div>
      </div>
    )
  }
}