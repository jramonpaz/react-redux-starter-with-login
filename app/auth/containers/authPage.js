import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'underscore';

import * as AuthActions from '../actions/authActions';
import Login from '../components/login';
import Confirm from '../components/confirm';
import SetPassword from '../components/setPassword';

const propTypes = {
  Auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  exampleKey: PropTypes.string
};

class AuthPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderConfrim() {
    return (<Confirm onConfirm={this.props.actions.confirmAccount} {...this.props} />);
  }
  renderLogin() {
    return (<Login onLogin={this.props.actions.login} {...this.props} />);

  }
  renderSetPassword() {
    return (<SetPassword onSetPassword={this.props.actions.setPassword} {...this.props} />);

  }
  render() {

    let {mode} = this.props.location.query;

    let componentToRender = null;
    switch (mode) {
      case "confirm":
        componentToRender = this.renderConfrim();
        break;
      case "setpassword":
        componentToRender = this.renderSetPassword();
        break;
      default:
        mode = "login";
        componentToRender = this.renderLogin();
        break;
    }
    return (
      <div className="Auth">
        <span>Auth Page : {mode}</span>
        {componentToRender}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    Auth: state.Auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  };
}

AuthPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
