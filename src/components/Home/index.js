import React, { Component } from 'react';
import Layout from '../Layout';
import Products from '../Products';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css'


class Home extends Component {

  render() {
    const { auth } = this.props;
    if(!auth) {
      return (
        <Redirect to='/auth' />
      );
    }
    return (
      <Layout>
        <Products />
      </Layout>          
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.loggedIn,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, null)(Home);
