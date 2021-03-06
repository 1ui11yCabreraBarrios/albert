import axios from "axios";

const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const POKE_INFO_EXITO = "POKE_INFO_EXITO";
const ERROR = "ERROR";

// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case POKE_INFO_EXITO:
      return { ...state, unPokemon: action.payload };
    case ERROR:
      return { hasError: true, error: action.payload };
    default:
      return state;
  }
}

// acciones

export const obtenerPokemonesAccion = () => async (dispatch) => {
  try {
    console.log("datos desde la api");
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    );
    
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const next = getState().pokemones.next;

  try {
    console.log("datos desde la api");
    const res = await axios.get(next);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;

  try {
    const res = await axios.get(previous);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unPokeDetalleAccion =
  (url = "https://pokeapi.co/api/v2/pokemon/1/") =>
  async (dispatch) => {
    try {
      console.log("desde api");
      const res = await axios.get(url);
      //    console.log(res.data)
      dispatch({
        type: POKE_INFO_EXITO,
        payload: {
          nombre: res.data.name,
          ancho: res.data.weight,
          alto: res.data.height,
          foto: res.data.sprites.front_default,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
