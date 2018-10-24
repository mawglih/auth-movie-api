import React, { Component } from 'react';
import SignIn from '../SignIn';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { submitFormStart } from 'actions';
import { Redirect } from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
  submit = ((values, dispatch) => {
    dispatch(submitFormStart(values));
    dispatch(reset('signinForm'));
  });

  renderRedirect = () => this.props.auth ? (<Redirect to='/' />) : (<SignIn onSubmit={this.submit}/>)
  render() {
    return (
      <div className="auth">
        {this.renderRedirect()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.loggedIn,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, { submitFormStart })(Auth);
