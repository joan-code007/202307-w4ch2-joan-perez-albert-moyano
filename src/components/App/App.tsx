import { useEffect, useState } from "react";
import { Character } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const apiUrl = import.meta.env.VITE_API_STARWARS_URL;

  useEffect(() => {
    (async () => {
      const response = await fetch(apiUrl);
      const apiCharacters = (await response.json()) as Character[];

      if (response.ok) {
        setCharacters([...apiCharacters]);
      }
    })();
  }, [apiUrl]);

  return (
    <div className="container">
      <ul className="character-list">
        {characters.length > 0 &&
          characters.map((character: Character) => (
            <li key={character.id}>
              <CharacterCard characterInfo={character} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
