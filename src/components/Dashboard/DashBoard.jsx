import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ListForm from "./ListForm";
import uniqid from 'uniqid';
uniqid();
import { useState } from "react";


const DashBoard = () => {
  const [dashCheckLists, setDashCheckLists]  = useState([]);

  const addDashList = dashCheckList => {
    ([...dashCheckLists,  {id: uniqid(), task: dashCheckList, completed: false, isEdit: false}])}
    console.log(dashCheckLists)

  const deleteDashCL = id => {
    setDashCheckLists(dashCheckLists.filter(dashCheckList => dashCheckList.id !== id))
}

    return(
        <>
     <header className="bg-blue mb-7 flex">
      <nav>
        <div>
            {/* <Link to="/DashBoard">
            <FontAwesomeIcon icon={faHome} className="h-9 m-1"/>
            </Link>

       
          <Link to="/FormsButtons">
          <FontAwesomeIcon icon={faGear} className="h-10 m-2 ml-60" />
          </Link> */}
        </div>
      </nav>
    </header>

    {/* <Link to="/CheckListWarpper">
    <section className="bg-white bg-cover">
        <button className="bg-pinkishred">GO make a new checklist BOI</button>
    </section>
    </Link> */}

    <ListForm addDashList={addDashList}/>
        {dashCheckLists.map((dashCheckList, index) => (
          <dashCheckList task={dashCheckList} key={index} deleteDashCL={deleteDashCL}/>
        ))}




    
        
        </>
    )
}

export default DashBoard;

//The card creator is here, but it not creating any, need to be correct 