import React, { useState } from 'react';
import { connect } from 'react-redux';

import { removeItem, changeToEditMode } from '../../redux/items/item.action';
import Options from '../options/Options';
import './item.scss';

const Item = ({ item, showModal, onDeleteItem, token, onEditMode }) => {
  const [isDOne, setIsDOne] = useState(false);

  const onDone = () => setIsDOne(!isDOne);
  const onDelete = () => onDeleteItem(token, item);
  const onEdit = () => {
    onEditMode('edit');
    showModal(item);
  };

  return (
    <div className="item">
      <div className="content">
        <h3 className={`${isDOne ? 'done' : null}`}>{item.heading}</h3>
        <p className="description"> {item.detail} </p>
      </div>
      <div className="options">
        <Options edit={onEdit} del={onDelete} done={onDone} />
      </div>
    </div>
  );
};

const mapDispatchToProp = dispatch => ({
  onDeleteItem: (token, item) => dispatch(removeItem(token, item)),
  onEditMode: mode => dispatch(changeToEditMode(mode)),
});

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProp)(Item);
