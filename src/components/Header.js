import React from 'react'

export class Header extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: 'transparent',
      padding: 110,
      positionTop: 'fixed'
    }

    return (
      <div 
        className="header" 
        data-parallax="true" 
        style={ divStyle }
      >
      </div>
    )
  }
}
