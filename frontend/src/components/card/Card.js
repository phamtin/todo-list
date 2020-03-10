import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

import { fetchItems, changeToEditMode } from '../../redux/items/item.action';
import Backdrop from '../backdrop/Backdrop';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import Item from '../item/Item';
import './card.scss';

const Card = ({ items, token, onFetchItems, onMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    onFetchItems(token);
  }, [onFetchItems, token]);

  const onShowModalEdit = item => {
    setShowModal(true);
    onMode('edit');
    setContent(item);
  };

  const onShowModalAdd = () => {
    setShowModal(true);
    onMode('add');
    setContent({ heading: '', detail: '' });
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="card">
        <Header />
        <div className="card__main">
          {items.length !== 0 ? (
            items.map(item => (
              <Item key={item._id} item={item} showModal={onShowModalEdit} />
            ))
          ) : (
            <div className="empty-icon">
              <Empty description="Want to busy?" />
            </div>
          )}
        </div>
        <button className="card__btn-add" onClick={onShowModalAdd}>
          <span>+</span>
        </button>
      </div>
      <Backdrop show={showModal} clicked={closeModal} />
      <Modal show={showModal} content={content} clicked={() => closeModal()} />
    </>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  items: state.items.listItems,
});

const mapDispatchToProps = dispatch => ({
  onFetchItems: token => dispatch(fetchItems(token)),
  onMode: mode => dispatch(changeToEditMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
