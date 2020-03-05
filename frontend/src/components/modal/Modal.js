import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addItem, editItem } from '../../redux/items/item.action';
import './modal.scss';

const Modal = ({
  isEdit,
  content,
  show,
  clicked,
  addNewItem,
  isAuth,
  token,
  onEditItem,
}) => {
  const [heading, setHeading] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    if (content) {
      setHeading(content.heading);
      setDetail(content.detail);
    }
  }, [content]);

  const onHandleInput = e => {
    if (e.target.name === 'heading') {
      setHeading(e.target.value);
    } else if (e.target.name === 'detail') {
      setDetail(e.target.value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (!heading || !detail) {
      return alert('Work is empty !');
    }
    const item = { heading, detail };
    if (isEdit) {
      const { _id } = content;
      clicked();
      setDetail('');
      setHeading('');
      return onEditItem(token, _id, item);
    }
    addNewItem(token, item);
    clicked();
    setDetail('');
    setHeading('');
  };

  return (
    <div className={`modal ${show ? 'modal__show' : 'modal__hide'}`}>
      {isAuth ? null : <Redirect to="/login" />}
      <p>Add new stuff</p>
      <form>
        <label style={{ marginRight: '20px' }}>Title</label>
        <input
          type="text"
          name="heading"
          onChange={onHandleInput}
          value={heading}
        />
        <br />
        <br />
        <label>Detail</label>
        <input
          type="text"
          name="detail"
          onChange={onHandleInput}
          value={detail}
        />
      </form>
      <button type="submit" onClick={onSubmitForm}>
        Add
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isAuth: state.auth.token != null,
  isEdit: state.items.isEditMode,
});

const mapDispatchToProps = dispatch => ({
  addNewItem: (token, item) => dispatch(addItem(token, item)),
  onEditItem: (token, idItem, item) => dispatch(editItem(token, idItem, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
