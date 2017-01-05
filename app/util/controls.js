import React, {  Component } from 'react';

class Button extends Component {
     constructor(props) {
        super(props);
    }
render(){
    return (<button {...this.props} ></button>);
}
}

export default {Button:Button};