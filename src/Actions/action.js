import { constants } from "../Constants/cons";

export const saveNewPelicula = (movie) => (dispatch) => {
  console.log(movie);
  try {
    dispatch({
      type: constants.SAVE_NEW_MOVIE,
      payload: movie,
    });
  } catch (error) {
    dispatch({ type: constants.ERROR_MOVIE, payload: error });
  }
};

export const editPelicula = (index) => (dispatch) => {
  try {
    dispatch({
      type: constants.EDIT_MOVIE,
      payload: index,
    });
  } catch (error) {
    dispatch({ type: constants.ERROR_MOVIE, payload: error });
  }
};

export const updaptePelicula = (movie, index) => (dispatch) => {
  try {
    dispatch({
      type: constants.UPDATE_MOVIE,
      payload: {movie, index},
    });
  } catch (error) {
    dispatch({ type: constants.ERROR_MOVIE, payload: error });
  }
};

export const deletePelicula = (movie) => (dispatch) => {
  try {
    dispatch({
      type: constants.DELETE_MOVIE,
      payload: movie,
    });
  } catch (error) {
    dispatch({ type: constants.ERROR_MOVIE, payload: error });
  }
};
