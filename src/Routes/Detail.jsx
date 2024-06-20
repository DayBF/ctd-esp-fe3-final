import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();
  const {id} = useParams()
  const baseUrl = `https://jsonplaceholder.typicode.com/users/${id}`;


  const getDetail = async () => {
    const rest = await fetch(baseUrl);
    const data = await rest.json();

    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  }, []);
 

  return (
    <>
      <div>
        <h1>Detail Dentist id </h1>
        <p>{details.name}</p>
        <p>{details.email}</p>
        <p>{details.phone}</p>
        <p>{details.website}</p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default Detail