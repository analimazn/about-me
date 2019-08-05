import React from 'react'

export class Skills extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor: 'yellow'}}>
        <p>{ this.props.technologie }</p>
        <p>{ this.props.percentage }</p>
      </div>
    )
  }
}
