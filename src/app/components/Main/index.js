import React from "react";

// Dump component are those component they don't know about actions and states
// StateLess component
export const Main = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-primary" onClick={() => props.changeUserName('John Deo')}>Change User Name</button>
          </div>
        </div>
      </div>
    )
}
