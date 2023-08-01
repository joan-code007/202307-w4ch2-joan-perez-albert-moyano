import characterData from "../../data/data";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterCardList = (): React.ReactElement => {
  return (
    <ul className="character-list">
      <li className="character-list__characters">
        <CharacterCard characterInfo={characterData[0]} />
      </li>
    </ul>
  );
};

export default CharacterCardList;
