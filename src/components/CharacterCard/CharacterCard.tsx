import { Character } from "../../types";
import "./CharacterCard.css";
interface CharacterCard {
  characterInfo: Character;
}

const CharacterCard = ({
  characterInfo: { id, name, height, pictureUrl, mass, created },
}: CharacterCard): React.ReactElement => {
  pictureUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <article className="card-container">
      <div className="card__info">
        <img className="card__image" src={pictureUrl} alt={name} />
        <h2 className="card__name">{name}</h2>
        <div>
          <span>{height}cm </span>
          <span>{mass}kg </span>
          <span>{created}</span>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
