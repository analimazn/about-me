import React from 'react'

export class Languages extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor: 'yellow'}}>
        <p>{ this.props.idiom }</p>
        <p>{ this.props.lecture }</p>
        <p>{ this.props.writer }</p>
        <p>{ this.props.conversation }</p>
        <p>{ this.props.listening }</p>
      </div>
    )
  }
}
