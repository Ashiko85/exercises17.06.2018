import React, { Component } from 'react';
import {connect} from "react-redux";

class About extends Component {
  render() {
    return (
        <div className ="container1">
        <div className ="App">
            <Header applicationName="Example application"/>
            <Menu/>
            <Section text="Example text - about section"/>
            <Footer authorInformation="Anna Waluszko"/>
        </div>
        </div>
    );
  }
}

export default connect(About);
