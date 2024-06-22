/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/ContextProvider";

const Card = ({ data }) => {
  const { dispatch } = useGlobalContext();

  const addFav = () => {
    dispatch({ type: "ADD_FAVORITE", payload: data });
  };

  return (
    <div className="card">
      <Link to={"/dentist/" + data.id}>
        <h2>{data.name}</h2>
      </Link>
      <p>{data.username}</p>
      <p>{data.id}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
