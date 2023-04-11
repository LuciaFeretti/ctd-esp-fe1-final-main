import { useState } from 'react';
import './paginacion.css';

interface PaginacionProps {
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    currentId: number;
}

const Paginacion = ({setCurrentId, currentId}: PaginacionProps) => {
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