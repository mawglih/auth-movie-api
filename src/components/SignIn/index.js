import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputComponent } from '../FormComponents';
import Button from '@material-ui/core/Button';
import './SignIn.css';

const SignIn = ({
  handleSubmit,
  onSubmit,
  valid,
  pristine,
  reset,
}) => (
  <Fragment>
    <h2>Please login to see the content</h2>
    <div className="signinForm">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          name="email"
          type="email"
          component={InputComponent}
          placeholder="Enter your email"
        />
        <Field
          name="password"
          type="password"
          component={InputComponent}
          placeholder="Enter your password"
        />
        <Button
          variant="extendedFab"
          color="primary"
          type="submit"
          className="button"
          disabled={!valid || pristine}
        >
          Submit
        </Button>
        <Button
            variant="extendedFab"
            color="secondary"
            type="button" 
            onClick={reset}
            className="button"
          >
            Cancel
          </Button>
      </form>
    </div>  
  </Fragment>
);

function validate(values) {
  const errors = {};
  if (!values.password || values.password.length < 6) {
    errors.name = "The password should be at least 6 charachters long!";
  }
  if ( !values.email) {
    errors.email = "Enter your email!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'signinForm',
  enableReinitialize: true,
})(SignIn);
