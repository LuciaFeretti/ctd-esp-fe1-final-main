import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Personaje } from '../types/typesPersonajes';

/**
 * Es una acción asincrónica para obtener la lista completa de personajes desde la api
 * @author Lucia Feretti
 * @param {string} url - URL de la API de personajes
 * @returns {Object} Objeto JSON con la lista completa de personajes
 */
export const fetchCharacters = createAsyncThunk('characters/fetchAll', async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching characters");
  }
  const data = await response.json();
  return data;
});

export interface CharacterList {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
  },
  results: Personaje[],
}

interface CharactersState {
  list: Personaje[];
  newList: Personaje[];
  searchedCharacters: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  nextPage: string | null;
  prevPage: string | null;
  currentId: number | null;
  favoritesCharacters: Personaje[];
}

const initialState: CharactersState = {
  list: [],
  newList: [],
  searchedCharacters: false,
  status: 'idle',
  error: null,
  nextPage: null,
  prevPage: null,
  currentId: null,
  favoritesCharacters: [],
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const character = state.list.find((character) => character.id === action.payload);
      if (character) {
        character.favorite = !character.favorite;
        state.favoritesCharacters = state.list.filter((character) => character.favorite);
      }
    },
    searchCharacter: (state, action: PayloadAction<string>) => {
      state.newList = state.list.filter((character) => character.name.toLowerCase().includes(action.payload.toLowerCase()));
      if(action.payload !== '') {
        state.searchedCharacters = true;
      } else {
        state.searchedCharacters = false;
      }
    }},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [...state.list, ...action.payload.results] ;
        state.nextPage = action.payload.info.next;
        state.prevPage = action.payload.info.prev;
        state.currentId = action.payload.results[0].id;
      })
      // .addCase(fetchCharacters.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // });
  },
});

export const { toggleFavorite, searchCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;