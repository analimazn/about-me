import React from 'react'

export class VolunteerWork extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor: 'yellow'}}>
        <p>{ this.props.organization }</p>
        <p>{ this.props.event }</p>
        <p>{ this.props.about }</p>
        <p>{ this.props.worksWith }</p>
        <p>{ this.props.years }</p>
      </div>
    )
  }
}
