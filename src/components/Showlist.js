import React from "react";
import "./Add.css";

const Showlist = ({
  name,
  price,
  category,
  quantity,
  serial,
  deleteHandler,
  editHandler,
}) => {
  return (
    <div>
      {/* ul-list is defined in add.css file  */}
      <ul className="ul-list">
        <li>{serial}</li>
        <li>{name}</li>
        <li>{price}</li>
        <li>{category}</li>
        <li>{quantity}</li>
        <button
          // btn is defined in add.css file
          className="btn"
          onClick={() => {
            deleteHandler(serial - 1);
          }}
        >
          Delete
        </button>
        <button
          className="btn"
          onClick={() => {
            editHandler(serial - 1);
          }}
        >
          Edit
        </button>
      </ul>
    </div>
  );
};

export default Showlist;
