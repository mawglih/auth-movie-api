import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'actions';
import Button from '@material-ui/core/Button';
import './Navigation.css';


const Navigation = ({
  logout,
}) => (
  <div className="navbar">
    <div className="title">
      <h1>Welcome to our movie site</h1>
    </div>
    <Button
      variant="extendedFab"
      color="primary"
      type="button"
      className="button"
      onClick={logout}
    >
      Log Out
    </Button>
  </div>
);

export default connect(null, { logout })(Navigation);
