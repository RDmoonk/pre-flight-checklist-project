import { Link } from "react-router-dom";
import Checklist from "./CheckListCard";
import { useState } from "react";

//The link that will set the path to the chechlist

// 

const Form = ({addCheckLists}) => {
    const [value, setValue] = useState("");

    const submitHandler = e =>{
            e.preventDefault();

            addCheckLists(value)
            
            setValue("")
            //here we pass the state from the Form to the Wrapper
    };

    return(
        // <Link to="/">
        //     <Checklist size={20} />
        //     <span>Checklist</span>
        // </Link>
        <form className="checkListForm" onSubmit={submitHandler}>
            <input type="text" className="checlist Input bg-gray-300 text-xl m-5" value={value} placeholder="Task..." onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="checkListButton  bg-yellow">add task</button>
        </form>
    );
};

export default Form;