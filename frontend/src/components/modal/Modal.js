import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/items/item.action";
import "./modal.scss";

const Modal = ({ show, clicked, addNewItem }) => {
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
    const item = { heading: heading, detail: detail };
    console.log(item);
    addNewItem(item);
    clicked();
  };

  return (
    <div className={`modal ${show ? "modal__show" : "modal__hide"}`}>
      <h2>Add new stuff</h2>
      <form>
        <label>heading</label>
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

const mapDispatchToProps = dispatch => ({
  addNewItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Modal);
