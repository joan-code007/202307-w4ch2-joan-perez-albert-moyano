import characterData from "../../data/data";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterCardList = (): React.ReactElement => {
  return (
    <ul className="character-list">
      <li className="character-list__characters">
        <CharacterCard characterInfo={characterData[0]} />
      </li>
      <li className="character-list__characters">
        <CharacterCard characterInfo={characterData[1]} />
      </li>
      <li className="character-list__characters">
        <CharacterCard characterInfo={characterData[2]} />
      </li>
    </ul>
  );
};

export default CharacterCardList;
