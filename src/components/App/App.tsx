import { useEffect, useState } from "react";
import { Character } from "../../types";
import Button from "../Button/Button";
import CharacterCard from "../CharacterCard/CharacterCard";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const textResetButton = "Reset button";
  const apiUrl = import.meta.env.VITE_API_STARWARS_URL;

  const resetHeight = async (characters: Character[]) => {
    const zeroHeightCharacters = await Promise.all(characters.map(async (character) => {
      const response = await fetch(`${apiUrl}/${character.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          height: "0",
        }),
        headers: {
          "Content-type": "application/json",
        }
      });

      if (response.ok) {
        character.height = "0";
        return character;
      }
      else return character;
    }));
    setCharacters(zeroHeightCharacters);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(apiUrl);
      const apiCharacters = (await response.json()) as Character[];

      if (response.ok) {
        setCharacters([...apiCharacters]);
      }
    })();
  }, [apiUrl]); //vuelve

  return (
    <div className="container">
      < Button textButton={textResetButton} actionOnClick={() => resetHeight(characters)} />
      <ul className="character-list">
        {characters.map((character: Character) => (
          <li key={character.id}>
            <CharacterCard characterInfo={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
