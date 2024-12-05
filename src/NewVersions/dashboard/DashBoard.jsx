import React from "react";
// is used for...
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import DashCard from "../sideStuff/DashCard";



const RevampDb = () => {

    const backButton = () => {
        navigate('/TaskForm');
      };

    return(
        <>
        <section>
        <h1 className="max-w-4x1 mx-auto p-6 border bg-blue w-auto">Pre-Flight Checklist</h1>

        <div className="space-y-2">
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-5 mt-5">
            <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6"/>

                <Link  to="/Form">
                <button className="bg-blue shadow-md rounded-lg p-1 text-white"><FontAwesomeIcon icon={faPlusCircle}/> Create a new checklist ! </button>
                </Link>
            </div>

            <section className="recentWorks bg-white rounded-lg shadow-md p-6 mb-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">All the Checklist</h2>

            </section>

            <DashCard />

        </div>
        
        </section>

        

        </>

      
    
    )
}

export default RevampDb