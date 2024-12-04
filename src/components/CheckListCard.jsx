import React from "react";
// ???
import { useState } from "react";
//the hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




// const Checklist = () => {
//   const [tasks, setTasks] = useState(["Eat", "shower", "sleep"]);
//   const [newTasks, setNewTasks] = useState("");

//   //for the text box, to addd the name of the checklist
//   function inputChange(event) {
//     setNewTasks(event.target.value);
//     //Allow to see the text
//   }

//   //to add another tasks
//   function addTasks() {}

//   //to delete the tasks
//   function deleteTasks(index) {}

//   //To move up the tasks with it index serving the reference so the code can understant it placement
//   function moveUp(index) {}

//   function moveDown(index) {}

//   return (
//     <>
//       <div className="Checklist text-center">
//       <h1>Ttile</h1>
//       <h2>Description</h2>
//         <input 
//         type="text"
//         placeholder="New Project"
//         value={newTasks}
//         //Call back to the JS function used up
//         onChange={inputChange}/>

        


//         <button className="addButton"
//         onClick={addTasks}>
//           add
//         </button>
     

//       <ol>
//         {tasks.map((task, index) => 
//             <li key={index}>
//               <span className="text"> {task}</span>
//               <button className="delete"
//               onClick={()=>deleteTasks(index)}>
//                 delete
//               </button>

//               <button className="moveButton"
//               onClick={()=>moveUp(index)}>
//                 Up
//               </button>

//               <button className="moveButton"
//               onClick={()=>moveDown(index)}>
//                 Down
//               </button>

//             </li>)}
//       </ol>

//       </div>


//     </>
//   );
// };

const Checklist = ({task,toggleComplete, deleteCL}) => {

    return(


        <section className="checklist mb-4 mt-4 flex m-20">
            <div className="bg-green-500 border-black border-2 flex space-x-2 space-y-2 h-10 mt-5">
            <FontAwesomeIcon icon={faBars} className="h-5 w-5 mt-2"/>
            <input type="checkbox" className="h-5 w-9 m-0 p-0 flew-wrap"/>
            <p className={`${task.completed ? 'completed': "" }`}>{task.task}</p>
            {/* <textarea className={`${task.completed ? 'completed':""}`} name="text" id="g">{task.task}</textarea> */}
            <FontAwesomeIcon icon={faPenToSquare} className="mt-2 pl-2"/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteCL(task.id)} className="mt-2"/>



            </div>
        </section>
    )
};



export default Checklist;
