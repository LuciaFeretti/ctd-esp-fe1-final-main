//import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from './redux/getPersonajeSlice';
import { useEffect } from 'react';

/**
 * Componente principal de la aplicación.
 * @author Lucia Feretti
 * @returns {JSX.Element}
 */

function App() {
  const dispatch = useDispatch();
  //const characters = useSelector((state) => state.characters.list);
  const status = useSelector((state) => state.characters.status);
  //const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.nextPage);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters('https://rickandmortyapi.com/api/character'));
    } else if (status === 'succeeded' && nextPage) { 
      dispatch(fetchCharacters(nextPage));
    }
  }, [status, dispatch, nextPage]);
  
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;