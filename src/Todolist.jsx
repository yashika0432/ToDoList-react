import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newtodo, setNewtodo] = useState("");

  let addNewtask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newtodo, id: uuidv4(), isDone: false }];
    });
    setNewtodo("");
  };

  let updateTodovalue = (event) => {
    setNewtodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevtodo) => todos.filter((prevtodo) => prevtodo.id !== id));
  };
  let MarkAllasdone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };
  let MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newtodo}
        onChange={updateTodovalue}
      ></input>
      <br></br>
      <button onClick={addNewtask}>Add task</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks ToDo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                MarkAsDone(todo.id);
              }}
            >
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={MarkAllasdone}>Mark All As Done</button>
    </div>
  );
}
