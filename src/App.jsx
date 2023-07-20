import { useState, useEffect } from "react";
import {ToDoForm} from "./ToDoForm";
import {ToDoList} from "./ToDoList";


export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS");
    if(localVal == null) return [];
    return JSON.parse(localVal);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addToDO(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    });
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(task => {
        if(task.id === id){
          return {...task, completed:completed}
        }
        return task;
      });
    });
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(task => task.id !== id);
    });
  }

  return (
    <>
      <ToDoForm addTask={addToDO} />

      <h2>To-Do</h2>
      
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}


