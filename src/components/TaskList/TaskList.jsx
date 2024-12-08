import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../ListCard/ListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//La page qui va accueillir les tasks

const TaskList = ({item,  todos, setTodos}) => {
  return (
    <>
      <section className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <button className=" bg-pinkishred shadow-md rounded-md p-1 mr-2  px-4 py-2">
              <FontAwesomeIcon icon={faArrowLeft}/>
              Back
            </button>
          </Link>

          <h2 className="text-3xl font-bold text-gray-900 m-2">Tasks</h2>

          <Link to="/Form">
            <button className=" bg-blue shadow-md rounded-md p-1 mr-2  px-4 py-2">
              <FontAwesomeIcon icon={faPlusCircle} /> Add a New Task
            </button>
          </Link>

        </div>
   

      </section>

    </>
  );
};

export default TaskList;
