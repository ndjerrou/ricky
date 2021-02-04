import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
} from "../constants/characterConstants";

import axios from "axios";

export const listCharacters = (token) => async (dispatch) => {
  try {
    dispatch({ type: CHARACTER_LIST_REQUEST });

    const { data } = await axios.get("/characters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: CHARACTER_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHARACTER_LIST_FAIL, payload: err.response });
  }
};
