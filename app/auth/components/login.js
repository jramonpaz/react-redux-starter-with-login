import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'underscore';
import { LocalForm, Control } from 'react-redux-form';
import * as AuthActions from '../actions/AuthActions';
import Controls from '../../util/controls';
import { get, post } from '../../api/api';
const propTypes = {
  onLogin: PropTypes.func.isRequired,
};

class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  handleChange(values) { }
  handleUpdate(form) { }
  handleSubmit(values) {

    this.props.onLogin(values);
  }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
        >
        <Control.text model=".username" placeholder="username" />
        <Control type="password" model=".password" placeholder="password" />
        <Controls.Button>Go</Controls.Button>
      </LocalForm>
    );

  }

}


Login.propTypes = propTypes;

export default Login;
