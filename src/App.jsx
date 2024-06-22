import { Route, Routes } from "react-router-dom";

import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { Layout } from "./Layout/Layout";
import { useGlobalContext } from "./Components/utils/ContextProvider";

function App() {
  const { state } = useGlobalContext();

  return (
    <div className={`app ${state.theme}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/*" element={<h5>La ruta no es correcta</h5>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
