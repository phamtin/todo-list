import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

import { removeItem, changeToEditMode } from '../../redux/items/item.action';
import Options from '../options/Options';
import './item.scss';

const Item = ({ item, showModal, onDeleteItem, token }) => {
  const [isDOne, setIsDOne] = useState(false);

  const onEdit = () => showModal(item);
  const onDone = () => setIsDOne(!isDOne);
  const doneItem = () => setIsDOne(!isDOne);
  const onDelete = () => onDeleteItem(token, item);

  return (
    <div className="item">
      <Checkbox onChange={doneItem} />
      <div className="content" onClick={() => onEdit(item)}>
        <h3 className={`${isDOne ? 'done' : null}`}>{item.heading}</h3>
        <p className={`description ${isDOne ? 'done' : null}`}>{item.detail}</p>
      </div>
      <div className="options-list">
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
