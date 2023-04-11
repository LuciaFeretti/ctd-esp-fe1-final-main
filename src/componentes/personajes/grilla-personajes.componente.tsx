import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useSelector } from 'react-redux';
//import ListaPersonajes from './buscarPersonaje';
import { Personaje } from '../../types/typesPersonajes';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface GrillaPersonajesProps {
    currentId: number;
    favorite?: boolean;
}

const GrillaPersonajes = ({ currentId, favorite }: GrillaPersonajesProps) => {
    const store = useSelector((state: any) => state.characters);
    const favoritesCharacters = useSelector(
        (state: any) => state.characters.favoritesCharacters
    );

    if (!favorite) {
        return (
        <div className="grilla-personajes">
            {!store.searchedCharacters &&
            store.list.map((personaje: Personaje) =>
                personaje.id >= currentId && personaje.id < currentId + 20 ? (
                <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                ) : null
            )}
            {store.searchedCharacters &&
            store.newList.map((personaje: Personaje) => (
                <TarjetaPersonaje key={personaje.id} personaje={personaje} />
            ))}
        </div>
        );
    } else if (favorite && favoritesCharacters) {
        return (
        <div className="grilla-personajes">
            {favoritesCharacters.map((personaje: Personaje) => (
            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
            ))}
        </div>
        );
    }
};

export default GrillaPersonajes;