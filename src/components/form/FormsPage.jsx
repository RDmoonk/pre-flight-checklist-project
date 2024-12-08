import {Link} from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../ListCard/ListCard";

const TaskForm = () => {
  
  
  //Title
  // const [todo, setTodo] = useState({ name: "", done: false });
  const [todo, setTodo] = useState("");

  //This is a new list
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", description:"", done: false });

    if(!todo.name.trim()){
      alert("Title is required");
      return
    }
  }

  // navigate("/Checklist")


 

  return (

    <section className="max-w-2x1 mx-auto p-6">
      <Link to="/">
        <button className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 bg-pinkishred shadow-md rounded-lg p-1">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </Link>

      <h1>The task is...</h1>

      <form className="space-y-6 mb-2  " onSubmit={handleSubmit}>
        <div className="titleZone">
          {/* <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label> */}
          <input
            type="text"
            className="border-solid  border-black border-2 size-xl mb-10 w-64 "
            placeholder="Enter your title"
            onChange={(e) => setTodo({...todo, name:e.target.value, done: false})}
            defaultValue={todo.name}

          />

          <textarea
            type="text"
            placeholder="Enter your description"
            onChange={(e) => setTodo({...todo, description:e.target.value})}
            defaultValue={todo.description}
            className="w-full px-4 py-2 border border-blue rounded-md focus:ring-yellow focus:border-blue mb-5"
            // onChange={(e)=>setApiTodo({name:e.target.value, done:false })}
          ></textarea>
        </div>

        <div className="mainQuest flex justify-end space-x-4">
          <Link to="/Checklist">
            <button className="cancelButtton">Back to the Task List</button>
          </Link>



          <button
            type="submit"
            className="px py- bg-blue text-white rounded-md p-1"
          >
            Create a task
          </button>

        </div>
      </form>
      {/* Task list creator */}
      {todos.map((item) => (
        
        <ListCard
        key={item.name} item={item} setTodos={setTodos} todos={todos}
        />
        
      ))}
     
    </section>
  );
};



export default TaskForm;
