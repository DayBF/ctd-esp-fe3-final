import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/ContextProvider";

const Favs = () => {
  const { state } = useGlobalContext();
  console.log(state.favorites);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.map((favorite) => (
          <Card key={favorite.id} data={favorite} />
        ))}
      </div>
    </>
  );
};

export default Favs;
