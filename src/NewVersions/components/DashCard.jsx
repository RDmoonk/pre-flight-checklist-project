import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";


const DashCard = () => {

    const goToUtopia = () => {
        navigate('/TaskForm');
      };

    return(
        <>
        <div className="bg-blue rounded-lg shadow-md p-4 mb-4 flex text-wrap w-48 pl-5 border-black ">
            <div className="items-center">
        <h2>Name Checklist</h2>
        <button onClick={goToUtopia} className="text-yellow m-2">
        <FontAwesomeIcon icon={faEdit}/>
        </button>
        <button>
            <FontAwesomeIcon icon={faTrash} className=" text-pinkishred" />
        </button>
        </div>
        </div> 
        </>
    )
}


DashCard.PropTypes = {
    name: PropTypes.string
}



export default DashCard