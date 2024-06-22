import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/ContextProvider";

const Favs = () => {
  const { state } = useGlobalContext();
  console.log(state.favorites);

  return (
    <div className="sections">
      <h1 className="sectionsNames">Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.map((favorite) => (
          <Card key={favorite.id} data={favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
