import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favorites} = useGlobalContext();
  console.log(favorites)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favorites.map( favorite => <Card key={favorite.id} data={favorite}/>)}
      </div>
    </>
  );
};

export default Favs;
