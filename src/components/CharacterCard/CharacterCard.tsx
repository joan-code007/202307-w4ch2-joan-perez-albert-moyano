import { useState } from "react";
import { Character } from "../../types";
import Button from "../Button/Button";
import "./CharacterCard.css";
interface CharacterCard {
  characterInfo: Character;
}

const CharacterCard = ({ characterInfo: { id, name, height, mass, created } }: CharacterCard): React.ReactElement => {

  const textButtonIncrement = "+ mass";
  const textButtonDecrement = "- mass";
  const [massCharacter, setMassCharacter] = useState(Number(mass));
  const [heightCharacter] = useState(Number(height));
  const apiUrl = import.meta.env.VITE_API_STARWARS_URL;

  const incrementMass = async () => {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        mass: `${Number(massCharacter) + 1}`,
      }),
      headers: {
        "Content-type": "application/json",
      }
    });
    if (response.ok) {
      setMassCharacter(massCharacter + 1);
    }
  }

  const decrementMass = async () => {
    if (massCharacter > 0) {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          mass: `${Number(massCharacter) - 1}`,
        }),
        headers: {
          "Content-type": "application/json",
        }
      });
      if (response.ok) {
        setMassCharacter(massCharacter - 1);
      }
    }
  }
  const pictureUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  let rawDate = created;
  const relevantDataLimit = 10;
  rawDate = rawDate.slice(0, relevantDataLimit);

  return (
    <article className="card-container">
      <div className="card">
        <img className="card__image" src={pictureUrl} alt={name} />
        <h2 className="card__name">{name}</h2>
        <div className="card__info">
          <span>{heightCharacter}cm </span>
          <div className="mass-manipulation">
            <Button actionOnClick={() => decrementMass()} textButton={textButtonDecrement} />
            <span>{massCharacter}kg </span>
            <Button actionOnClick={() => incrementMass()} textButton={textButtonIncrement} />
          </div>
          <span>{rawDate}</span>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
