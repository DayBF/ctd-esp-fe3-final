import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [details, setDetails] = useState([]);
  const [photo, setPhoto] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const baseUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

  const getDetail = async () => {
    const rest = await fetch(baseUrl);
    const data = await rest.json();

    setDetails(data);
  };

  const addImages = async () => {
    const rest = await fetch("https://randomuser.me/api");
    const data = await rest.json();
    setPhoto(data.results[0].picture.medium);
  };

  useEffect(() => {
    addImages();
  }, []);

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="sections">
      <h1 className="sectionsNames">Detail Dentist</h1>
      <div className="cardInfoDetail">
        <img className="profileImgDetail" src={photo} alt={details.name} />
        <div className="profileInfoDetail">
          <p>{details.name}</p>
          <p>{details.email}</p>
          <p>{details.phone}</p>
          <p>{details.website}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Detail;
