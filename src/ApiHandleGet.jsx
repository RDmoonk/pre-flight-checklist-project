import axios from "axios";

const fetchChecklists = async (token) => {
  try {
    const response = await axios.get("https://greenvelvet.alwaysdata.net/pfc/checklists", {
      headers: {
        Authorization: `Bearer ${token}`, // Authentification par token
        "Content-Type": "application/json",
      },
    });
    return response.data; // Retourne les données des checklists
  } catch (error) {
    console.error("Erreur lors de la récupération des checklists :", error.response?.data || error.message);
    throw error; // Relance l'erreur pour gestion plus haut
  }
};

export default fetchChecklists;
