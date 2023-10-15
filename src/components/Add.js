import React, { useEffect, useState } from "react";
import "./Add.css";

const initial = {
  name: "",
  price: "",
  category: "",
  quantity: "",
};

const Add = ({ addData, editable, Update }) => {
  const [data, setData] = useState(initial);

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.price || !data.category || !data.quantity) {
      alert("Please provide all fields");
    } else {
      addData(data);
      setData(initial);
    }
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (!data.name || !data.price || !data.category || !data.quantity) {
      alert("Please provide all fields");
    } else {
      Update(data);
      setData(initial);
    }
  }

  useEffect(() => {
    if (editable) setData(editable);
  }, [editable]);

  return (
    <div>
      <form className="form-data">
        <input
          type="text"
          placeholder="Item Name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          value={data.price}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
          name="category"
          value={data.category}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          name="quantity"
          value={data.quantity}
        />
        <button
          className="btn"
          onClick={editable === null ? handleSubmit : handleUpdate}
        >
          {editable === null ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Add;
