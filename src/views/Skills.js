import React from 'react'
import Informations from '../config/informations_ptBR.json'
import { SkillsGraphic } from '../components/SkillsGraphic'

export class Skills extends React.Component {
  render() {
    const iconStyle = {
      marginRight: 15
    }

    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-8 offset-md-3">
            <div 
              className="d-flex justify-content-start" 
            >
              <h4>
                <i 
                  className={ Informations.skills.icon } 
                  style={ iconStyle }
                /> 
                { Informations.skills.title }
              </h4>
            </div>
            <SkillsGraphic 
              skills={ Informations.skills.all }
            ></SkillsGraphic>
          </div>
        </div>
      </div>
    )
  }
}