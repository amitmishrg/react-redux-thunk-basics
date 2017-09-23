import React from "react";

// Dump component are those component they don't know about actions and states
// StateLess component
export const User = (props) => {
    return (
      <div className="container mt-5">
        <h3>The User Page</h3>
        <p>User Name: {props.username} </p>
      </div>
    )
}
