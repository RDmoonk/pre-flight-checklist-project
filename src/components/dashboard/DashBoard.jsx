import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import DashCard from "../sideStuff/DashCard";
import { useState } from "react";



const RevampDb = () => {

    const[cards, setCards] = useState([]);
    const [formInput, setFormInput] = useState({title:"", description:""});

    const handleInputChange = (e) =>   {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    }

    const handleAddCard = (e) => {
        e.preventDefault();
        if (formInput.title.trim() && formInput.description.trim()) {
          setCards([...cards, formInput]);
          setFormInput({ title: "", description: "" });
          
        }
      };

  

    return(
        <>
        <section>
        <h1 className="max-w-4x1 mx-auto p-6 border bg-blue w-auto text-white">Pre-Flight Checklist</h1>

        <div className="space-y-2">
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-5 mt-5">
            <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6"/>

              
            </div>

            <section className="recentWorks bg-white rounded-lg shadow-md p-6 mb-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">All the Checklist</h2>

            </section>

            <form onSubmit={handleAddCard}>
            <input
          type="text"
          name="title"
          placeholder="Title"
          value={formInput.title}
          onChange={handleInputChange}
          className="mr-10 p-5"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formInput.description}
          onChange={handleInputChange}
          className="mr-10 p-5"
        />
        {/* <button type="submit" style={{ padding: "5px 10px" }}>
          Add Card
        </button> */}
        <button className="bg-blue shadow-md rounded-lg p-1 text-white" type="submit"><FontAwesomeIcon icon={faPlusCircle}/> Create a new checklist ! </button>
      </form>

      <div>
        {cards.map((card, index) => (
        //   <div
        //     key={index}
        //     style={{
        //       border: "1px solid #ddd",
        //       borderRadius: "8px",
        //       padding: "10px",
        //       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        //     }}
        //   >
          <DashCard key={index}/>
        //     <h3>{card.title}</h3>
        //     <p>{card.description}</p>
        //   </div>
        ))} 
         </div>

        </div>
        
        </section>

        

        </>

      
    
    )
}

export default RevampDb