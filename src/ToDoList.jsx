export function ToDoList({todos, toggleTodo, deleteTodo}){

    return (
        <ul className="task-list">
        {todos.length === 0 && "No tasks"}
        {todos.map(task => {
          return (
            <li key={task.id}>  
              <label>
                <input className="checkbox" type="checkbox" checked={task.completed} onChange={e => toggleTodo(task.id, e.target.checked)} />
                {task.title}
              </label>
              <button className="btn btn-del" onClick={() => deleteTodo(task.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    )
}