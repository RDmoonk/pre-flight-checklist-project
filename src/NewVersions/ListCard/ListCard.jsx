import propTypes from "prop-types";
import React from "react";
// is used for...
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import uniqid from 'uniqid';

const ListCard = ({item, todos, setTodos}) => {

    function handleDelete(item){
        console.log("It's delete for item", item)
        setTodos(todos.filter((todo) => todo!== item))
        
    }

    function handleClick(name){
        const newArray = todos.map((todo) =>todo.name === name? {...todo,done:!todo.done}: todo)

        setTodos(newArray)
        console.log(todos)
    }

    return(
        <>
        <section className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between"></div>
            <input  className="float-left m-2 mr-5 size-5" type="checkbox" />
            {/* onClick={() => onToggle(task.id)} */}
            {/* As if i used a "IF" */}

            <div>
            <h3 className="text-gray-900">
            <span onClick={() => handleClick(item.name)}>{item.name}</span>
            </h3>
            {/* className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`} */}
            {/* {task.title} */}
            <button className="text-pinkishred float-right"  onClick={() =>handleDelete(item) }> <FontAwesomeIcon icon={faTrash} className="border-pinkishred size-5" /> </button>
            {/* onClick={() => onDelete(task.id)} */}

            <div className="text-sm text-gray-400">
            <p>
                The Date
                {/* {new Date(task.createdAt).toLocaleDateString()} */}
            </p>
        </div>

        </div>

        </section>
 

  

        </>
    )
}

// ListCard.propTypes = {
//     task: propTypes.shape({
//         //An object with a specific shape ex:
//         id: propTypes.string.isRequired,
//         title: propTypes.string.isRequired,
//         completed: propTypes.string.isRequired,
//     }).isRequired,
//     createdAt: propTypes.instanceOf(Date),
//     onToggle: propTypes.func.isRequired,
//     onDelete: propTypes.func.isRequired
    
// }


export default ListCard;
