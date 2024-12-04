import React, {useState} from "react";
import Form from "./Form";
import uniqid from 'uniqid';
uniqid() ;
import Checklist from "./CheckListCard";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CheckListWarpper = () => {
    const [checkLists, setCheckLists] = useState([]);

    const addCheckLists = checkList => {
        //maybe uniqid
        setCheckLists([...checkLists, {id: uniqid(), task: checkList, completed: false, isEdit: false}])
        console.log(checkLists)
        //Id give you a new id for each new value, task is gonna be the name we enter, the two boolean value let us have nothing so we can always start at zero
    }

    const toggleComplete = id => {
        setCheckLists(checkLists.map(checkList => checkList.id === id ? {...checkList, completed: !checkList.completed}: checkList ))
    };  

    const deleteCL = id => {
        setCheckLists(checkLists.filter(checkList => checkList.id !== id))
    }

    return(
        <div className="checkWarpper">
            <Form addCheckLists={addCheckLists}/>
            {checkLists.map((checkList, index) => (
                <Checklist task={checkList} key={index} 
                toggleComplete={toggleComplete}
                deleteCL = {deleteCL}/>
                //toggle ne marche pas, à corriger
                
            ))}
         </div>
    )
};


export default CheckListWarpper;