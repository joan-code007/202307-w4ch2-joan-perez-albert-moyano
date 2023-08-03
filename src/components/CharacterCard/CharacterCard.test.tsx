import { render, screen } from "@testing-library/react";
import { Character } from "../../types";
import CharacterCard from "./CharacterCard";

const character: Character = {
  id: 1,
  name: "Luke Skywalker",
  height: "",
  mass: "",
  created: "",
};

describe("Given a CharacterCard component", () => {
  describe("When it receives a character named 'Luke Skywalker'", () => {
    test("Then it should show 'Luke Skywalker' inside a heading'", () => {
      render(<CharacterCard characterInfo={character} />);

      const characterName = screen.getByRole("heading", {
        name: character.name,
      });

      expect(characterName).toBeInTheDocument();
    });
    test("Then it should show an image with 'Luke Skywalker' as alternative text", () => {
      render(<CharacterCard characterInfo={character} />);

      const characterImage = screen.getByAltText(character.name);

      expect(characterImage).toBeInTheDocument();
    });
  });
});
