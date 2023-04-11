import { useState } from 'react';
import './paginacion.css';
//import { useSelector } from 'react-redux';

interface PaginacionProps {
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    currentId: number;
}

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({setCurrentId, currentId}: PaginacionProps) => {
    //const nextPage = useSelector((state: any) => state.characters.nextPage);

    const [disableNext, setDisableNext] = useState<boolean>(false)
    const [disablePrev, setDisablePrev] = useState<boolean>(true)

    const next = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setDisablePrev(false)
        if (currentId >= 821) {
            setDisableNext(true)
            return
        }
        setCurrentId(prevId => (prevId + 20))
    }

    const prev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
        if (currentId <= 1) {
            setDisablePrev(true)
            return
        }
        setDisableNext(false)
        setCurrentId(prevId => (prevId - 20))
    }

    return <div className="paginacion">
        <button disabled={disablePrev} className={"primary"} onClick={prev}>Anterior</button>
        <button disabled={disableNext} className={"primary"} onClick={next} >Siguiente</button>
    </div>
}

export default Paginacion;