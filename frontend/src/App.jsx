import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Card from './components/card/Card';
import Login from './page/login/Login';
import { connect } from 'react-redux';

function App({ isAuth }) {
  if (isAuth) {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/panel" component={Card} />
          <Redirect to="/panel" />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="login" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.token !== null,
});

export default connect(mapStateToProps)(App);
