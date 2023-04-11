import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './getPersonajeSlice'

const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
})

export default store