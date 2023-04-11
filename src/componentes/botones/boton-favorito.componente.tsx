import { useDispatch } from 'react-redux';
import './boton-favorito.css';
import { toggleFavorite } from '../../redux/getPersonajeSlice';
import { Personaje } from '../../types/typesPersonajes';

interface BotonFavoritoProps {
    personaje: Personaje;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @author Lucia Feretti
 * @param {Personaje} personaje
 * @returns JSX element 
 */
const BotonFavorito: React.FC<BotonFavoritoProps> = ({personaje}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleFavorite(personaje.id));
    }

    const src = personaje.favorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={handleClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;