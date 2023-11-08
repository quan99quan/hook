import React, { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (window.confirm("Are you sure you want to add this todo?")) {
            setTodo([
              ...todo,
              {
                id: Date.now() * Math.random(),
                title: e.target.title.value,
                takeNote: e.target.takeNote.value,
              },
            ]);
          }
        }}
      >
        <div>
          <input type="text" placeholder="Title" name="title" />
        </div>
        <div>
          <input type="text" placeholder="Take Note" name="takeNote" />
        </div>
        <button type="submit">Add</button>
      </form>

      {todo.map((item) => (
        <div key={item.id}>
          <div>title:{item.title}</div>
          <div> takeNote:{item.takeNote}</div>
          <div>
            <button
              onClick={() => {
                setTodo(todo.filter((itemFilter) => itemFilter.id != item.id));
              }}
             
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
