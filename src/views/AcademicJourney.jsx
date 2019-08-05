import React from 'react'

export class AcademicJourney extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor: 'yellow'}}>
        <p>{ this.props.school }</p>
        <p>{ this.props.course }</p>
        <p>{ this.props.dateBegin }</p>
        <p>{ this.props.dateEnd }</p>
      </div>
    )
  }
}
