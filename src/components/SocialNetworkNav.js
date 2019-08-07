import React from 'react'
import Informations from '../config/informations_ptBR.json'

export class SocialNetworkNav extends React.Component {
  render() {
    const divStyle = {
      positionTop: 'fixed',
      backgroundColor: 'transparent',
    }

    const iconStyle = {
      color: 'gray',
      fontSize: 20,
      margin: 5
    }

    const info = Informations.socialNetwork.map((data, key) => {
      return (
        <a  key={ key }
            rel="noopener noreferrer"
            target="_blank"
            title={ data.title }
            href={ data.url }
        >
          <i className={ data.icon }  style={ iconStyle } />
        </a>
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-6">
            <div className="container" style={ divStyle }>
              { info }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
