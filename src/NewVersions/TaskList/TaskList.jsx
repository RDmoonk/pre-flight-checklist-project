import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../ListCard/ListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//La page qui va accueillir les tasks

const TaskList = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <button className=" bg-pinkishred shadow-md rounded-md p-1 mr-2  px-4 py-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back
            </button>
          </Link>

          <h2 className="text-3xl font-bold text-gray-900 m-2">Tasks</h2>

          <Link to="/Form">
            <button className=" bg-blue shadow-md rounded-md p-1 mr-2  px-4 py-2">
              <FontAwesomeIcon icon={faPlusCircle} /> Add a New Task
            </button>
          </Link>

          {/* </Link> */}

          <div className="sapace-y-4">
            {/* {task.length === 0 ? (<p className="text-center text-gray-500 py-8">No tasks. Do You have some ideas ?</p>) : (
                        task.map((task) => (
                        <ListCard
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}/>

                        ))
                        )} */}
          </div>
        </div>
      </section>

      {/* <ListCard /> */}
    </>
  );
};

export default TaskList;
