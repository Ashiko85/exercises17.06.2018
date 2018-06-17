import React, { Component } from 'react';
import { connect} from 'react-redux'

class Contact extends Component {
  render() {
    return (
        <div>
            <div className ="container2">
            <div className ="App">
                <Header applicationName="Example application"/>
                <Menu/>
                <Section text="Example text - contact section"/>
                <Footer authorInformation="Anna Waluszko"/>
            </div>
            </div>
        </div>
    );
  }
}

export default connect(Contact);
