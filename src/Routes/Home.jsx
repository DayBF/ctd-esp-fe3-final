import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/ContextProvider";

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main className="sections">
      <h1 className="sectionsNames">Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} data={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
