import React, { Component } from 'react';

import Mainpage from './Mainpage'
import Contact from './Contact';
import CV from './CV';
import Bio from './Bio';


class SubApp extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Mainpage'
    }
  }

 onRouteChange = (route) => {
  this.setState({route: route})
}

  render() {
      if (this.state.route === 'Mainpage') {
      return <Mainpage onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'CV') {
      return <CV onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'Bio') {
      return <Bio onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'Contact') {
      return <Contact onRouteChange={this.onRouteChange} />
    }
  }
}

export default SubApp;
