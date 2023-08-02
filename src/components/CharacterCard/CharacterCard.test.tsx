import { render, screen } from "@testing-library/react";
import { Character } from "../../types";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When it receives a character named 'Luke Skywalker'", () => {
    test("Then it should show 'Luke Skywalker' inside a heading'", () => {
      const character: Character = {
        id: 1,
        name: "Luke Skywalker",
        height: "",
        mass: "",
        created: "",
        pictureUrl: "",
      };

      render(<CharacterCard characterInfo={character} />);

      const characterName = screen.getByRole("heading", {
        name: character.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
