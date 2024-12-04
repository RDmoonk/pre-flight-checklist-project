import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckListWarpper from "./components/CheckListWarpper";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

//Allow the way to the page
import Form from "./components/Form";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
// import FormsButtons from "./components/form/FormsButtons";
import DashBoard from "./components/Dashboard/DashBoard";
import TaskForm from "./NewVersions/form/FormsPage";
import RevampDb from "./NewVersions/dashboard/DashBoard";
import ListCard from "./NewVersions/ListCard/ListCard";
import TaskList from "./NewVersions/TaskList/TaskList";
import DashCard from "./NewVersions/components/DashCard";

function App() {
  return (
    <>
    {/* <Router>
    <Navbar/>
    <Routes>
    <Route path="/DashBoard" element={<DashBoard/>}></Route>
      <Route path="/FormsButtons" element={<FormsButtons/>} ></Route> 
       <Route path="/CheckListWarpper" element={<CheckListWarpper/>}></Route>
      

      </Routes>
      </Router> */}

      
        <Router>
          <Routes>
            <Route path="/" element={<RevampDb/>}/>
            <Route path="/RevamDb" element={<TaskForm/>}/>


          </Routes>
   
        </Router>


        {/* <TaskList/> */}

        <TaskForm/>
       
       

       
   
        

    </>
  );
}

export default App;
