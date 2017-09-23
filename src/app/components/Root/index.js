import React from "react";

import Header from '../Header';

class Root extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
      </div>
    )
  }
}

export default Root;
