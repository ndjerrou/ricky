import { ADD_FAV_LIST } from "../constants/favConstants";

export const favCharacterReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FAV_LIST:
      return { favs: [...state.favs, action.payload.favs] };
    case ADD_FAV_FAIL:
      return { error };
    default:
      return state;
  }
};
