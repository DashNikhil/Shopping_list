import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Data from "./data/data";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  const [data, setData] = useState(Data);
  const [records, setRecords] = useState(Data);
  const [edit, setEdit] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);

  function Adddata(items) {
    setData([
      ...data,
      {
        sr: data.length + 1,
        ...items,
      },
    ]);
  }

  function updateData(items) {
    let temp1 = [...data];
    temp1.splice(updateIndex, 1, items);
    setData(temp1);
    setEdit(null);
  }

  function Deletehandler(index) {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);
  }

  function editHandler(index) {
    setUpdateIndex(index);
    setEdit(data[index]);
  }
  useEffect(() => {
    setData(data);
    setRecords(data);
  }, [data]);

  function searchHandler(event) {
    const temp2 = [...data];
    setRecords(
      temp2.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
    console.log("Search handler is called ", event.target.value);
  }

  return (
    <div className="App main">
      <h1>To-Day's Shopping List</h1>
      <Search searchHandler={searchHandler} />
      <Add addData={Adddata} editable={edit} Update={updateData} />
      <List
        data={records}
        deleteHandler={Deletehandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default App;
