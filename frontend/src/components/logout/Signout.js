import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth/auth.action';
import { emptyList } from '../../redux/items/item.action';
import './signout.scss';

const Signout = ({ onLogout, onEmptyList }) => {
  const logout = () => {
    onEmptyList();
    onLogout();
  };
  return (
    <div className="btn-signout" onClick={logout}>
      <img src="logout.png" alt="signout" />
      <span>Log out</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onEmptyList: () => dispatch(emptyList()),
  onLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Signout);
