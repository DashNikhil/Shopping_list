import React from "react";
import Showlist from "./Showlist";

const List = ({ data, deleteHandler, editHandler }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Showlist
          key={index}
          serial={index + 1}
          name={item.name}
          price={item.price}
          category={item.category}
          quantity={item.quantity}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))}
    </div>
  );
};

export default List;
