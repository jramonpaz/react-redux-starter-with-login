import React, { PropTypes, Component } from 'react';
import _ from 'underscore';
import { LocalForm, Control } from 'react-redux-form';
import Controls from '../../util/controls';

const propTypes = {
  onConfirm : PropTypes.func.isRequired,
  };

class Confirm extends Component {
 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

handleChange(values) {  }
  handleUpdate(form) { }
  handleSubmit(values) { 
    
    this.props.onConfirm(values);
   }
  render() {

         let {userId,code} = this.props.location.query;
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model=".merchantId" placeholder="Merchant Id"/>
        <Control.text model=".temporaryPassword"  placeholder="Temporary Password" />
        <Control.text model=".userId" className="hidden" value={userId}/>
        <Control.text model=".code" className="hidden" value={code}/>
        
        <Controls.Button>Confirm</Controls.Button>
      </LocalForm>
    );

  }

}

Confirm.propTypes = propTypes;

export default Confirm;
