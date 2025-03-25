import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NotesForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    contenido: "",
  });
  const [title, setTitle] = useState("Agregar");

  const { id } = useParams();

  useEffect(() => {
    if (id == undefined) return;

    setTitle(`Editar ${id}`);
    axios.get(`http://localhost:8000/api/notes/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id == undefined) {
      axios
        .post("http://localhost:8000/api/notes", data)
        .then((response) => {
          navigate(`/notes`);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      axios
        .put(`http://localhost:8000/api/notes/${id}`, data)
        .then((response) => {
          navigate(`/notes`);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <form>
        <label htmlFor="contenido">Contenido:</label>
        <textarea
          name="contenido"
          id="contenido"
          onChange={(e) => setData({ ...data, contenido: e.target.value })}
          value={data.contenido}
        ></textarea>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          {" "}
          Guardar
        </button>
      </form>
    </>
  );
};

export default NotesForm;
