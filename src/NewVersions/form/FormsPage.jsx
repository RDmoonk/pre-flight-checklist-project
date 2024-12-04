import { Link} from "react-router-dom";
import React, { useState } from "react";
// useNavigate is used for
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import RevampDb from "../dashboard/DashBoard";
import { useNavigate } from "react-router-dom";
import ListCard from "../ListCard/ListCard";


const TaskForm = () => {

  // https://www.youtube.com/watch?v=CR0gehgQC-w&ab_channel=CodeStoic input 
  //Title
  const [todo, setTodo] = useState({name:"", done:false})

  //This is a new list
  const [todos, setTodos] = useState([])

  


  function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo({name:"", done:false});
    // https://www.youtube.com/watch?v=k1V2MnZR2lM&ab_channel=CodeStoic the textarea doesn't clear
    // {id: uniqid(), task: checkList, completed: false, isEdit: false}
  } 



  // for the title:https://stackoverflow.com/questions/70008856/react-how-to-clear-textarea
  // function onChange(e){
  //   const currentText = e.target.value
  //   if(currentText.lenght && currentText[currentText.length - 1] === " "){
  //     setTodos([...todos,todo]);
  //     setTodo("")
  //   } else {
  //       setTodo(e.target.value)
  //   }
  // }

  // To go back

  const backButton = () => {
    navigate('RevampDb');
  };



  return (
    
    // <section className="flex flex-col align-middle">
    //   <button className="bg-blue align-middle">Save</button>
    //   {/*save the checklist*/}
    //   <Link to="/CheckListWarpper">
    //   <button className="bg-blue p-5 m-5">Add</button>
    //   {/*add a new task by making go back to the list */}
    //   </Link>
    //   <button className="bg-blue">Delete</button>
    //   {/*delete a checklist */}
    //   <button className="bg-blue">Edit/New</button>
    //   {/*create a new checklist*/}
    // </section>

    <section className="max-w-2x1 mx-auto p-6">
      
     <button  onClick={backButton}  className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 bg-pinkishred shadow-md rounded-lg p-1">
      {/* reference: API Reference, Function useNavigate = let you navigate progammatically(def: ) in the borwser  */}
      <FontAwesomeIcon icon={faArrowLeft}/>
      Back
     </button>


     <h1>Create New Task</h1>

     <form className="space-y-6 mb-2  " onSubmit={handleSubmit}>

     <div className="titleZone">
      {/* <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label> */}
      
      <textarea type="text" placeholder="Enter your Title" defaultValue={todo.name} onChange={(e)=>setTodo({name:e.target.value, done:false }) } required  className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue mb-5"></textarea>
      {/* defaultValue give me nothing bc there was nothing in my useState(""), if needed, change the default into a simple value, id and name */}
      {/* label is use for... */}



      {/* <input type="text" placeholder="Enter the title" className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue" /> */}
      {/* value={title} onChange={(e) => setValue(e.target.value)} required 
      those are the values to use later*/}
      {/* required force the title name to be put */}


     </div>

     <div className="descriptionZone">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Description</label>

      <textarea className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue" type="text" placeholder="Enter a descirption" />
      {/* value={title} onChange={(e) => setValue(e.target.value)} */}
      {/* required force the title name to be put */}

     </div>

     <div className="mainQuest flex justify-end space-x-4">
      <button className="cancelButtton" onClick={() => navigate('/RevampDb')}>Cancel</button>

      
      <button type="submit" className="px py- bg-blue text-white rounded-md p-1">Create a Task/Save</button>
     </div>
    </form>
        {/* Task list creator */}
        {todos.map((item) => (
          <ListCard key={item.name} item={item} todos={todos} setTodos={setTodos}/>
        ))}
    
     


    </section>

   


  );
};

export default TaskForm;