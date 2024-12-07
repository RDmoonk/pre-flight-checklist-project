// import React from "react";
// import Popup from 'reactjs-popup';  
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const DashForm = () => {



//     return(
//         <section>
//             <div>
//             <Popup trigger={
//                 <button>Create</button>} modal nested>
//                     { close => (
                
//                         <div className="modal">
//                             <form action="submit" className="border-black">
//                             <input type="text" className="border-black" />

//                             <div className="mt-10 float-right text-xl">       
//                             <button className="bg-blue mr-3 rounded-lg m-3 p-2">Add</button>
                          
//                                 <button className="bg-pinkishred rounded-lg m-3 p-2" onClick={() => close()}>close</button>
//                             </div>
//                             </form>
//                         </div>
                        
//                     )}
//             </Popup>
//             </div>

//         </section>
//     )
// };

// export default DashForm

// Fake out , schéma:
// New(Dashboard) => Form with:
//1: The title(and description) for the dashboard card and the the task
// When the user enter all those things, it will insert the title/desciprtion on the dashcard and create a task in this dashcard
// How ? i don't know.