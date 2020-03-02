import React from "react";

import "./options.scss";

const Options = ({ edit, del }) => {
  const deleteItem = () => del();
  const editItem = () => edit();

  return (
    <div className="options">
      <button className="option option__edit" onClick={() => editItem}>
        edit
      </button>
      <button className="option option__delete" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

export default Options;
