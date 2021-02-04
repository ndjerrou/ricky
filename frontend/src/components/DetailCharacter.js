import Character from "./Character";
import { useSelector } from "react-redux";

import "../styles/detailcharacter.css";

const DetailCharacter = ({
  match: {
    params: { id: idReceived },
  },
}) => {
  const { characters } = useSelector((state) => state.characterList);
  const { name, id, image } = characters.find(
    (character) => character.id === parseInt(idReceived)
  );
  return (
    <div className="single-character">
      {<Character name={name} id={id} image={image} />}
    </div>
  );
};

export default DetailCharacter;
