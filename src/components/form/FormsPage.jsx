import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../ListCard/ListCard";
import handlePostRequest from "../../ApiChecklist";

const TaskForm = () => {
  
  
  // https://www.youtube.com/watch?v=CR0gehgQC-w&ab_channel=CodeStoic input
  //Title
  // const [todo, setTodo] = useState({ name: "", done: false });
  const [apiTodo, setApiTodo] = useState("");

  //This is a new list
  // const [todos, setTodos] = useState([]);
  const [apiTodos, setApiTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    // https://www.youtube.com/watch?v=k1V2MnZR2lM&ab_channel=CodeStoic the textarea doesn't clear
    // {id: uniqid(), task: checkList, completed: false, isEdit: false}
  }

  function apiHandleSubmit(e) {
    e.preventDefault();
    const notes = handlePostRequest();
    setApiTodos(apiTodos);
    setApiTodo(apiTodo);
    
  
  }
  console.log(apiTodos)

 

  return (

    <section className="max-w-2x1 mx-auto p-6">
      <Link to="/">
        <button className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 bg-pinkishred shadow-md rounded-lg p-1">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </Link>

      <h1>Create New Task</h1>

      <form className="space-y-6 mb-2  " onSubmit={apiHandleSubmit}>
        <div className="titleZone">
          {/* <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label> */}
          <input
            type="text"
            className="border-solid  border-black border-2 size-xl mb-10 w-64 "
            placeholder="Enter your title"
            // onChange={(e)=>setApiTodo({name:e.target.value, done:false })}

          />

          <textarea
            type="text"
            placeholder="Enter your description"
            className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue mb-5"
            // onChange={(e)=>setApiTodo({name:e.target.value, done:false })}
          ></textarea>

          {/* <textarea type="text" placeholder="Enter your task" defaultValue={todo.name} onChange={(e)=>setTodo({name:e.target.value, done:false }) } required  className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue mb-5"></textarea> */}
          <textarea
            type="text"
            placeholder="Enter your task"
            className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue mb-5"
            onChange={(e)=>setApiTodo({name:e.target.value, done:false }) }
          ></textarea>
          {/* defaultValue give me nothing bc there was nothing in my useState(""), if needed, change the default into a simple value, id and name */}
          {/* label is use for... */}
        </div>

        <div className="mainQuest flex justify-end space-x-4">
          <Link to="/Checklist">
            <button className="cancelButtton">Cancel</button>
          </Link>


          <button
            type="submit"
            className="px py- bg-blue text-white rounded-md p-1"
            
          >
            Create a Task/Save
          </button>

        </div>
      </form>
      {/* Task list creator */}
      {apiTodos.map((notes) => (
        <ListCard
        key={notes.id} title={notes.title} desc={notes.descritpion} apiTodos={apiTodos} setApiTodos={setApiTodos}
        />
      ))}
     
    </section>
  );
};



export default TaskForm;
