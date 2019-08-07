import React from 'react'

export class Header extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: 'url(assets/img/gradient/PiggyPink.jpg)',
      backgroundColor: 'transparent',
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
