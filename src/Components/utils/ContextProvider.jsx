import { createContext, useContext, useState, useEffect } from "react";

// export const initialState = {theme: "", data: []}

export const GlobalContext = createContext();

const lsFavorites = localStorage.getItem('favorites') 
  ? JSON.parse(localStorage.getItem('favorites'))
  : []

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favorites, setFavorites] = useState(lsFavorites)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  return (
    <GlobalContext.Provider value={{favorites, setFavorites}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);