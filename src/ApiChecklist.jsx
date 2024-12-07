import { useState, useEffect } from "react";
import axios from 'axios';


const apiKey= "ede8203c16b0c64e64be135aefb5e9de672a9f94"

const handlePostRequest = async () => {
  try {
    const response = await axios.post(
    "https://greenvelvet.alwaysdata.net/pfc/checklist/add", 
      {
        title: "",
        description:"",
        todo:[],
      }, 
      { headers: { Token: "ede8203c16b0c64e64be135aefb5e9de672a9f94",
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Credentials': 'true'
       },
     } 
    );
    console.log(response.data);
  } catch (error) {
    console.error("Erreur :", error);
  }
};

// const handleGet = async (id) => {
//   try{
//     const reponse = await axios.post(
//       "https://greenvelvet.alwaysdata.net/pfc/checklist?id=3"
//     )
//   }
// }

export default handlePostRequest;