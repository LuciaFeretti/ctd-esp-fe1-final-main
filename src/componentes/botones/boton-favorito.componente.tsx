import { useDispatch } from 'react-redux';
import './boton-favorito.css';
//import { useState } from 'react';
// import charactersSlice, { toggleFavorite } from '../../redux/getPersonajeSlice';
import { toggleFavorite } from '../../redux/getPersonajeSlice';
//import { useSelector } from 'react-redux';
import { Personaje } from '../../types/typesPersonajes';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @author Lucia Feretti
 * @param {Personaje} personaje
 * @returns JSX element 
 */

interface BotonFavoritoProps {
    personaje: Personaje; // Debes definir la interfaz del objeto Personaje
}

const BotonFavorito: React.FC<BotonFavoritoProps> = ({personaje}) => {
    const dispatch = useDispatch();
    //const favoritesCharacters = useSelector((state: any) => state.characters.favoritesCharacters);
    //const searchedCharacters = useSelector((state: any) => state.characters.searchedCharacters);

    const handleClick = () => {
        dispatch(toggleFavorite(personaje.id));
    }

    const src = personaje.favorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={handleClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;