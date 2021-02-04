import {
  ADD_FAV_LIST_REQUEST,
  ADD_FAV_LIST_FAIL,
  ADD_FAV_LIST_REQUEST_SUCCESS,
} from "../constants/favConstants";

import axios from "axios";

export const addToFavList = (idCharacter, idUser) => async (dispatch) => {
  try {
    dispatch({ type: ADD_FAV_LIST_REQUEST, loading: true });
    const { data } = await axios.post(
      "/favs",
      {
        id: idCharacter,
        idUser,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDE5OWM5NDA0OTg0ZDJhMGNmN2U5OTUiLCJlbWFpbCI6ImhhdWZlQGdtYWlsLmNvbSIsImlhdCI6MTYxMjQ1MTM1MCwiZXhwIjoxNjE1MDQzMzUwfQ.3eRe89lGqcJM2ySRpfryfYP0WmRJ5tj1ZO5_z50TKFo",
        },
      }
    );

    console.log(data);

    dispatch({ type: ADD_FAV_LIST_REQUEST_SUCCESS, loading: false });
  } catch (err) {
    dispatch({ type: ADD_FAV_LIST_FAIL, payload: err.reponse });
  }
};
