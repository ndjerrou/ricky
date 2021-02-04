import DetailCharacter from "../components/DetailCharacter";

import "../styles/detailcharacterscreen.css";

const DetailCharacterScreen = ({ match }) => {
  return (
    <div id="container-character">
      <DetailCharacter match={match} />
    </div>
  );
};

export default DetailCharacterScreen;
