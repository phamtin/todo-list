import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchItems } from "../../redux/items/item.action";
import Backdrop from "../backdrop/Backdrop";
import Header from "../header/Header";
import Modal from "../modal/Modal";
import Item from "../item/Item";
import "./card.scss";

const Card = ({ items, token, onFetchItems }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    onFetchItems(token);
  }, [onFetchItems, token]);

  const onShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <Header />
        {console.log(items)}
        <div className="card__main">
          {items.map(item => (
            <Item key={item._id} item={item} />
          ))}
        </div>
        <button className="card__btn-add" onClick={onShowModal}>
          <span>+</span>
        </button>
      </div>
      <Backdrop show={showModal} clicked={closeModal} />
      <Modal show={showModal} clicked={() => closeModal()} />
    </>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  items: state.items.listItems
});

const mapDispatchToProps = dispatch => ({
  onFetchItems: token => dispatch(fetchItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
