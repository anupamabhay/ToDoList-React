import { useState } from "react";
export function ToDoForm({addTask}){
    const [newItem, setNewItem] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        // instead of newItem != "" try regex[0-9a-zA-Z] or however it's written. Check google.
        if(newItem !== ""){
          addTask(newItem);
        }
        setNewItem("");
      }
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor="item">New task</label> 
            <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}