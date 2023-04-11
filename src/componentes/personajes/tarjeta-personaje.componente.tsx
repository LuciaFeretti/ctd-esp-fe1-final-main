import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Personaje } from '../../types/typesPersonajes';

interface Props {
    personaje: Personaje;
}

/**
 * Componente que muestra información de un personaje
 * @author Lucia Feretti 
 * @param {Personaje} personaje - es el objeto que contiene la información del personaje
 * @returns {JSX.Element}
 */
const TarjetaPersonaje = ({ personaje }: Props) => {
    const { name, image } = personaje;

    return (
        <div className="tarjeta-personaje">
        <img src={image} alt={name} />
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito personaje={personaje} />
        </div>
        </div>
    );
};

export default TarjetaPersonaje;