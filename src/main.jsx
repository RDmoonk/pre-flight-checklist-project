import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TaskList from "./NewVersions/TaskList/TaskList.jsx";
import TaskForm from "./NewVersions/form/FormsPage.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Checklist" element={<TaskList/>} />
      <Route path="/Form" element={<TaskForm/>} />
    </Routes>
  </BrowserRouter>
);