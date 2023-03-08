import React, { FC } from "react";
import { CharacterType } from "../../types";
import { Badge, CardContainer } from "./styled";

type CardItemProps = {
  character: CharacterType;
};

export const CardItem: FC<CardItemProps> = ({ character }) => {
  return (
    <CardContainer>
      <img src={character.image} alt="character" />
      <div className="right-side">
        <div className="name-layout">{character.name}</div>
        <div className="badge status-layout" style={{ flexDirection: "row" }}>
          <Badge
            background={
              character.status === "Alive"
                ? "green"
                : character.status === "Dead"
                ? "red"
                : "yellow"
            }
          />
          {character.status + " - " + character.gender}
        </div>
        <div className="status-layout">
          <div className="naming">Location:</div> {character.location.name}
        </div>
        <div className="status-layout">
          <div className="naming">Episodes amount:</div>{" "}
          {character.episode.length}
        </div>
      </div>
    </CardContainer>
  );
};
