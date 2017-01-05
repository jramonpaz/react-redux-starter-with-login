import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'underscore';
import { LocalForm, Control } from 'react-redux-form';
import * as AuthActions from '../actions/AuthActions';
import Controls from '../../util/controls';
const propTypes = {
  onSetPassword : PropTypes.func.isRequired,
  };

class SetPassword extends Component {
 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

handleChange(values) {  }
  handleUpdate(form) { }
  handleSubmit(values) { 
    
    this.props.onSetPassword(values);
   }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model=".password" placeholder="Password" />
        <Control.text model=".confirmPassword" placeholder="Confirm Password"/>
        <Controls.Button>Go</Controls.Button>
      </LocalForm>
    );

  }

}


SetPassword.propTypes = propTypes;

export default SetPassword;
