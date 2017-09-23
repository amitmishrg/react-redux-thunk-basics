import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Root} />
          <Route path="/user" component={User}/>
          <Route path="/home" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('root'));
