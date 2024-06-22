/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/ContextProvider";
import { useEffect, useState } from "react";

const Card = ({ data }) => {
  const [photo, setPhoto] = useState([]);
  const { dispatch } = useGlobalContext();
  console.log(data);

  const addImages = async () => {
    const rest = await fetch("https://randomuser.me/api");
    const data = await rest.json();
    setPhoto(data.results[0].picture.medium);
  };

  useEffect(() => {
    addImages();
  }, []);

  const addFav = () => {
    dispatch({ type: "ADD_FAVORITE", payload: data });
  };

  return (
    <div className="card">
      <div className="cardInfo">
        <Link to={"/dentist/" + data.id}>
          <img className="profileImg" src={photo} alt={data.name} />
          <h2 className="cardName">{data.name}</h2>
        </Link>
        <p className="cardUsername">{data.username}</p>
      </div>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
