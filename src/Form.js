import React from "react";

const Form = ({ name, setName, list, setList, editItem, setEditItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && !editItem) {
      setList([
        ...list,
        { name: name, id: new Date().getTime().toString(), completed: false },
      ]);
    }
    if (name && editItem) {
      updateList(name, editItem.id, editItem.completed);
      setEditItem("");
    }
    setName("");
  };

  const updateList = (name, id, completed) => {
    const newItem = { name: name, id: id, completed: completed };
    const newList = list.map((item) => {
      if (item.id === id) {
        return newItem;
      }
      return item;
    });
    setList(newList);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder={editItem ? "Edit here" : "Enter a to-do..."}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="add-btn">
        {editItem ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
