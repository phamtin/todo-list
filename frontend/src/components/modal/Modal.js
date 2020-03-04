import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { addItem } from "../../redux/items/item.action";
import "./modal.scss";

const Modal = ({ show, clicked, addNewItem, isAuth, token }) => {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");

  const onHandleInput = e => {
    if (e.target.name === "heading") {
      setHeading(e.target.value);
    } else if (e.target.name === "detail") {
      setDetail(e.target.value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (!heading || !detail) {
      return alert("Work is empty !");
    }
    const item = { heading, detail };
    addNewItem(token, item);
    clicked();
  };

  return (
    <div className={`modal ${show ? "modal__show" : "modal__hide"}`}>
      {isAuth ? null : <Redirect to="/login" />}
      <p>Add new stuff</p>
      <form>
        <label style={{ marginRight: "20px" }}>Title</label>
        <input type="text" name="heading" onChange={onHandleInput} />
        <br />
        <br />
        <label>Detail</label>
        <input type="text" name="detail" onChange={onHandleInput} />
      </form>
      <button type="submit" onClick={onSubmitForm}>
        Add
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isAuth: state.auth.token != null
});

const mapDispatchToProps = dispatch => ({
  addNewItem: (token, item) => dispatch(addItem(token, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
