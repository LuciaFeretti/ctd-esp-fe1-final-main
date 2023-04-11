import './filtros.css';
import { searchCharacter } from '../../redux/getPersonajeSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

interface FormValues {
    nombre: string;
}

const initialForm: FormValues = {
    nombre: ''
}

const Filtros = ({reset, setReset}: {reset: boolean, setReset: (value: boolean) => void}) => {
    const [form, setForm] = useState<FormValues>(initialForm);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(searchCharacter(''))
    }, [dispatch])

    useEffect(() => {
        if (reset) {
            dispatch(searchCharacter(''))
            setReset(false)
            setForm(initialForm)
        }
    }, [reset, dispatch, setReset])

    /**
     * Actualiza el estado del formulario con el valor actual del campo de entrada y llama a la acción searchCharacter
     * @author Lucia Feretti
     * @param {React.ChangeEvent<HTMLInputElement>} e - evento de cambio del campo de entrada
     * @returns {void}
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        dispatch(searchCharacter(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={handleChange} value={form.nombre}/>
    </div>
}

export default Filtros;