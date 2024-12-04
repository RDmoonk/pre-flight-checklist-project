import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../ListCard/ListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


//La page qui va accueillir les tasks

const TaskList = () => {
    return(
        <>
        <section className="max-w-4xl mx-auto p-6">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
                {/* <Link to="/new" className="inline-flex items-center px-4 py-2 bg-blue text-white rounded-md"> */}
                <button className=" bg-blue shadow-md rounded-md p-1 mr-2  px-4 py-2">
                <FontAwesomeIcon icon={faPlusCircle} />  Add a New Task
                </button>
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
    )
}

export default TaskList;