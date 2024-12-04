import uniqid from "uniqid";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ListForm = ({ addDashList }) => {
  const [value, setValue] = useState("");

  const submitCardHandler = (e) => {
    e.preventDefault();

    addDashList(value);
  };

  
  return (
    <form className="checkListForm" onSubmit={submitCardHandler}>
      <input
        type="text"
        className="checlist Input bg-gray-300 text-xl m-5"
        value={value}
        placeholder="Add a Checklist !"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="DashBoardButton  bg-pinkishred"> <FontAwesomeIcon icon={faPlusSquare} className="h-5 w-5 mt-2" /> Create</button>
      {/* {" "}  */}
    </form>
  );
};

export default ListForm;
//Normaly, it should give those value to the dash board so i can create a card that let you to a list creator
