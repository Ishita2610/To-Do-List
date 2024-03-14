import React , {useState} from "react";
function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTasks, setnewTasks] = useState("");
     
    function handleInputChange(event){
    setnewTasks(event.target.value);
    }

    function addTasks(){
     if(newTasks.trim() !== ""){
        setTasks(t => [...t,newTasks]);
        setnewTasks("")
     }
    }

    function deleteTasks(index){
    const updatedTasks = tasks.filter((_,i)=> i!==index);
    setTasks(updatedTasks);
    }

    function moveTaskUp(index){
    if(index>0){
        const updatedTasks = [...tasks];
        // to swap elements in array
        [updatedTasks[index],updatedTasks[index-1]] =
        [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            // to swap elements in array
            [updatedTasks[index],updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(<div className = "to-do-list"> 
        <h1>To-Do-List</h1>
         <div>
         <input
                  type="text"
                  placeholder="Enter a task.."
                  value={newTasks}
                  onChange={handleInputChange} />
                  <button 
                    className="add-button"
                    onClick={addTasks}>
                        Add Tasks
                    </button>
         </div>
         <ol>
            {tasks.map((tasks,index) =>
            <li key ={index}>
                <span className="text">{tasks}</span>
                <button className="delete-button"
                onClick={() => deleteTasks(index)}>
                    Delete
                </button>
                <button className="move-button"
                onClick={() => moveTaskUp(index)}>
                    👆
                </button>
                <button className="move-button"
                onClick={() => moveTaskDown(index)}>
                    👇
                </button>




            </li>
            )}
         </ol>
           </div>);
}

export default ToDoList