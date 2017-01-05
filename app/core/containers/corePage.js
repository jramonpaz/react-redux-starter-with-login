import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as CoreActions from '../actions/coreActions';

const propTypes = {
    Core: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  exampleKey : PropTypes.string
  };

class CorePage extends Component {
 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getSampleData(this.props.exampleKey);
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="Core">
        <div className="Core-container">
          Generated 'Core' Module, tada
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    Core: state.Core
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CoreActions, dispatch)
  };
}

CorePage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CorePage);
