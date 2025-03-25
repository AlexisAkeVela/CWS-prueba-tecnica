import { useEffect, useState } from "react";
import Tables from "../templates/Tables";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const requestData = () => {
    axios.get("http://localhost:8000/api/notes").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <button onClick={(e) => navigate("nuevo")}>Agregar</button>
      <Tables data={data} handleUpdate={requestData}></Tables>
    </>
  );
};

export default Notes;
