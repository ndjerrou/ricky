import Loader from "../components/Loader";
import Message from "../components/Message";
import Character from "../components/Character";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCharacters } from "../actions/characterActions";

import "../styles/charactersscreen.css";

const CharactersScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);
  const {
    userInfo: { token },
  } = user;

  const charactersList = useSelector((state) => state.characterList);

  const { loading, error, characters } = charactersList;

  useEffect(() => {
    dispatch(listCharacters(token));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div id="characters-grid">
          {characters.map(({ name, id, image }) => (
            <Character
              selected={user.userInfo.likes.indexOf(id) > -1}
              key={id}
              name={name}
              id={id}
              image={image}
              user={user}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CharactersScreen;
