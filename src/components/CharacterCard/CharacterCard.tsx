import { Character } from "../../types";
import "./CharacterCard.css";
interface CharacterCard {
  characterInfo: Character;
}

const CharacterCard = ({
  characterInfo: { name, height, pictureUrl, mass, created },
}: CharacterCard): React.ReactElement => {
  return (
    <article className="card-container">
      <div className="card__info">
        <img className="card__image" src={pictureUrl} alt={name} />
        <h2 className="card__name">{name}</h2>
        <span>{height}</span>
        <span>{mass}</span>
        <span>{created}</span>
      </div>
    </article>
  );
};

export default CharacterCard;
