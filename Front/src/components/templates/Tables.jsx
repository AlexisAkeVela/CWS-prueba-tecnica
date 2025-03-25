import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tables = ({ data, handleUpdate }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/notes/${id}`).then((response) => {
      handleUpdate();
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <td> Contenido </td>
          <td> Opciones </td>
        </tr>
      </thead>
      <tbody>
        {data.map((element, index) => (
          <tr key={index}>
            <td> {element.contenido} </td>
            <td>
              <button onClick={() => navigate(`/notes/${element.id}`)}>
                {" "}
                Editar
              </button>
            </td>
            <td>
              <button onClick={() => handleDelete(element.id)}>
                {" "}
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
