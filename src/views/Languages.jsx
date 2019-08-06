import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import Informations from '../config/informations_ptBR.json'


export class Languages extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    const languagesData = Informations.languages.all.map(val => {
      const data = val.data.map((data, index) => {
        return (
          <div key={ index }>
            <div className="card border-light mb-3">
              <div className="card-header">
                <h6>{ data.title }</h6>
              </div>
              <div className="card-body d-flex flex-row justify-content-start">
              </div>
              <ProgressBar animated now={45} />
            </div>
          </div>
        )
      })
      return data
    })

    const languages = Informations.languages.all.map((value, index) => {
      return (
        <div className="d-flex flex-row">
          <div className="" key={ index }>
            <h3>{ value.idiom }</h3>
            <p>{ languagesData }</p>
          </div>
        </div>
      )
    })

    return (
      <div className="container mt-5 mb-5">
        <div className="column">
          <div className="col-md-6 offset-md-3">
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
