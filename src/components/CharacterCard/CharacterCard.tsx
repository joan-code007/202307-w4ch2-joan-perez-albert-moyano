import { Character } from "../../types";

interface CharacterCard {
  characterInfo: Character;
}

const CharacterCard = ({
  characterInfo: { name, height, pictureUrl, mass, created },
}: CharacterCard): React.ReactElement => {
  return (
    <article className="card-container">
      <img className="card__image" src={pictureUrl} alt={name} />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <ul>
          <li>{height}</li>
          <li>{mass}</li>
          <li>{created}</li>
        </ul>
      </div>
    </article>
  );
};

export default CharacterCard;
