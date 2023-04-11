import { useSelector } from 'react-redux';
import { Personaje } from '../../types/typesPersonajes';

interface RootState {
    valorCampo: string;
    characters: {
        list: Personaje[];
    };
}

const ListaPersonajes = () => {
    const valorCampo = useSelector((state: RootState) => state.valorCampo);
    const personajes = useSelector((state: RootState) => state.characters.list);
    
    /**
     * Filtra una lista de personajes según el valor de un campo de búsqueda.
     * @author Lucia Feretti
     * @param {Personaje[]} personajes - La lista de personajes a filtrar.
     * @param {string} valorCampo - El valor del campo de búsqueda.
     * @returns {Personaje[]} La lista de personajes filtrada.
     */
    const filtrarPersonajes = (personajes: Personaje[], valorCampo: string) => {
        return personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(valorCampo.toLowerCase())
        );
    };

    const personajesFiltrados = filtrarPersonajes(personajes, valorCampo);

    return (
        <div className="lista-personajes">
        {personajesFiltrados.map((personaje) => (
            <div key={personaje.id}>
            <h2>{personaje.name}</h2>
            <p>{personaje.descripcion}</p>
            </div>
        ))}
    </div>
    );
};

export default ListaPersonajes;