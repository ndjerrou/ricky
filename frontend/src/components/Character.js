import { Link } from "react-router-dom";
import { addToFavList } from "../actions/favActions";
import { useDispatch, useSelector } from "react-redux";

import "./../styles/character.css";

const Character = ({ user, name, image, id, selected }) => {
  const dispatch = useDispatch();
  const AddToFav = () => {
    dispatch(addToFavList(id, user.userInfo.userId));
  };
  return (
    <figure className="character-figure">
      <div className="character-photo-wrap">
        <Link to={`/character/${id}`}>
          <img src={image} alt={name} className="character-photo" />
        </Link>
      </div>
      <figcaption>
        <p>{name}</p>
        <div className="control-button">
          <button
            className={`favs ${selected ? "fav" : ""}`}
            onClick={AddToFav}
          >
            &hearts;
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Character;
