import React from "react";

import "./options.scss";

const Options = ({ edit, del, done }) => {
  const deleteItem = () => del();
  const editItem = () => edit();
  const doneItem = () => done();

  return (
    <div className="options">
      <input
        type="checkbox"
        className="option option__done"
        defaultChecked={false}
        onChange={doneItem}
      ></input>
      <label>done</label>
      <button className="option option__edit" onClick={editItem}>
        edit
      </button>
      <button className="option option__delete" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

export default Options;
