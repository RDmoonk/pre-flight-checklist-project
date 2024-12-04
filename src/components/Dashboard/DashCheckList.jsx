import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DashCheckList = ({task, deleteCL, OnSelect}) => {
    return(
        <section className="DashCheckList border-black bg-blue shadow-xl ">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faBars} className="h-5 w-5 mt-2"/>
                <h1 className="underline-offset-auto">{task.task}</h1>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteCL(task.id)} className="mt-2"/>
            </div>

            <h1>
                <button></button>
                <button></button>
            </h1>

        </section>
    )
}

export default DashCheckList;