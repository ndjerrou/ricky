import {
  CHARACTER_LIST_FAIL,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
} from "../constants/characterConstants";

export const characterListReducer = (
  state = { characters: [] },
  { type, payload }
) => {
  switch (type) {
    case CHARACTER_LIST_REQUEST:
      return { loading: true, characters: [] };
    case CHARACTER_LIST_SUCCESS:
      return { loading: false, characters: payload };
    case CHARACTER_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
