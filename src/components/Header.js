import React from 'react'

export class Header extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: '#fb6fdb',
      padding: 100,
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
