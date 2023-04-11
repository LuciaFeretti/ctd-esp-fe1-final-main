import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useState } from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * Uso: 
 * ``` <PaginaInicio /> ```
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const [currentId, setCurrentId] = useState(1)
    const [reset, setReset] = useState(false)

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>setReset(true)}>Limpiar Búsqueda</button>
        </div>
        <Filtros reset={reset} setReset={setReset}/>
        <Paginacion setCurrentId={setCurrentId} currentId={currentId}/>
        <GrillaPersonajes currentId={currentId}/>
        <Paginacion setCurrentId={setCurrentId} currentId={currentId}/>
    </div>
}

export default PaginaInicio