import { constants } from "../Constants/cons";

const initialData = {
  loading: false,
  data: [],
  editMovie: false,
  updateMovie: null,
};

export default function movieReducer(state = initialData, action) {
  switch (action.type) {
    case constants.SAVE_NEW_MOVIE:
      return {
        data: [...state.data, action.payload],
      };

    case constants.EDIT_MOVIE:
      return {
        ...state,
        editMovie: true,
        updateMovie: { movie: state.data[action.payload], index: action.payload }
      };

    case constants.UPDATE_MOVIE:
      console.log(action.payload)
      return { data:
        state.data.map((item,index) =>{
          return index === action.payload.index ? action.payload.movie : item}
        )};
    case constants.DELETE_MOVIE:
      return { data: state.data.filter((item) => action.payload !== item) };
      
    case constants.ERROR_MOVIE:
      return { hasError: true, error: action.payload };
    default:
      return state;
  }
}
