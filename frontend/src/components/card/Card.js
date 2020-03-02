import React, { useState } from "react";
import { connect } from "react-redux";

import "./card.scss";
import Header from "../header/Header";
import Item from "../item/Item";
import Modal from "../modal/Modal";
import Backdrop from "../backdrop/Backdrop";

const Card = ({ items }) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className="card__main">
          {items.map(item => (
            <Item key={item.heading} item={item} />
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

const mapStateToProps = state => {
  return {
    items: state.items.listItems
  };
};

export default connect(mapStateToProps)(Card);
