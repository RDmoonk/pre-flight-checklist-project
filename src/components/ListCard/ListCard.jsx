import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


// The cn utility function (short for "classnames") is a helper function that combines clsx and tailwind-merge to handle class name concatenation and conflicts in Tailwind CSS

const ListCard = ({item, todos, setTodos}) => {

    function handleDelete(item){
        console.log("It's delete for item", item)
        setTodos(todos.filter((todo) => todo!== item))
        
    }

    

    function handleClick(name){

        setTodos( todos.map((todo) =>todo.name === name? {...todo,done:!todo.done}: todo))
        

    }

    const completed = item.done? "line-through opacity-50 text-gray-500": ""

    return(
        <>
        <section className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex"></div>
            <input  className="float-left m-2 mr-5 size-5" completed={completed} onClick={() => handleClick(item.name)} type="checkbox" />
            {/* onClick={() => onToggle(task.id)} */}
            {/* As if i used a "IF" */}

            <div>
            <h2 className="text-gray-900">
            <span className={completed} onClick={() => handleClick(item.name)}>{item.name}</span>
            </h2>
            <button className="text-pinkishred float-right"  onClick={() =>handleDelete(item) }> <FontAwesomeIcon icon={faTrash} className="border-pinkishred size-5" /> </button>
            <p  className={completed} onClick={() => handleClick(item.description)}>{item.description}</p>
            {/* className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`} */}
            {/* {task.title} */}
          
            {/* onClick={() => onDelete(task.id)} */}

            <div className="text-sm text-gray-400">
        </div>

        </div>

        </section>
 

  

        </>
    )
}


export default ListCard;
