/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const lsFavorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("No se pudo modificar el estado");
  }
};

const initialState = {
  theme: "light",
  dentists: [],
  photos: [],
  favorites: lsFavorites,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const getDentists = async () => {
    const rest = await fetch(baseUrl);
    const data = await rest.json();

    dispatch({ type: "GET_DENTISTS", payload: data });
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
