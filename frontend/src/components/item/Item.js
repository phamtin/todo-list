import React, { useState } from "react";
import { connect } from "react-redux";

import { removeItem } from "../../redux/items/item.action";
import Options from "../options/Options";
import "./item.scss";

const Item = ({ item, onDeleteItem }) => {
  const [isDOne, setIsDOne] = useState(false);

  const onEdit = () => {};
  const onDone = () => setIsDOne(!isDOne);
  const onDelete = () => onDeleteItem(item);

  return (
    <div className="item">
      <div className="content">
        <h3 className={`${isDOne ? "done" : null}`}>{item.heading}</h3>
        <p className="description"> {item.detail} </p>
      </div>
      <div className="options">
        <Options edit={onEdit} del={onDelete} done={onDone} />
      </div>
    </div>
  );
};

const mapDispatchToProp = dispatch => ({
  onDeleteItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProp)(Item);
