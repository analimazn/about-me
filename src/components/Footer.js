import React from 'react'

export class Footer extends React.Component {

  render() {
    const divStyle = {
      backgroundColor: 'transparent'
    }
    
    return (
      <footer className="footer" style={ divStyle }>
        <div className="d-flex flex-row justify-content-center">
          <div className="row">
            <div className="col-md-12 col-md-offset-6">
              <span className="copyright">
                <i className="fa fa-coffee coffee"/> +
                <i className="fa fa-beer beer"/> +
                <i className="fa fa-terminal terminal"/> = 
                <i className="fa fa-heart heart" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
