import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoList(){
    const[tasks, setTasks] = useState(["eating", "take a shower", "walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
         const updatedTasks = tasks.filter((_, i) => i !== index);
         setTasks(updatedTasks)
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function movetaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <>
        <div className="todoList">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..."
                value={newTask} onChange={handleInputChange} />

                <button className=" addBtn"
                onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>

                    <button className="deleteBtn"
                     onClick={ () => deleteTask(index)}> 
                        Delete
                    </button>

                    <button className="upBtn"
                     onClick={ () => moveTaskUp(index)}>
                        ☝
                    </button>

                    <button className="downBtn"
                     onClick={ () => movetaskDown(index)}>  
                        👇
                    </button>
                </li>)}
            </ol>

        </div>
    </>
    );
}