import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

const STORAGE_KEY = "app.list";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(STORAGE_KEY));
    setList((prevList) => [...prevList, ...storedList]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  return (
    <>
      <h2 className="to-do">To Do List</h2>
      <Form
        name={name}
        setName={setName}
        list={list}
        setList={setList}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      <List
        list={list}
        setList={setList}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      {list.length > 0 && (
        <button className="clear-btn btn" onClick={() => setList([])}>
          Clear List
        </button>
      )}
      {list.length > 0 && (
        <section className="todo-number">
          <article>
            <span className="complete">
              {list.filter((item) => item.completed).length}
            </span>{" "}
            Completed
          </article>
          <article>
            <span>{list.filter((item) => !item.completed).length}</span>
            &nbsp;&nbsp; Left to do
          </article>
        </section>
      )}
    </>
  );
}

export default App;
