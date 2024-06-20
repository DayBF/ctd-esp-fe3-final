import { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const getDentists = async () => {
    const rest = await fetch(baseUrl);
    const data = await rest.json();

    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  },[]);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          dentists.map( dentist => <Card key={dentist.id} data={dentist} />)
        }
      </div>
    </main>
  )
}

export default Home