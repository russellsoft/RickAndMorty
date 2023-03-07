import { FC } from "react"
import CardItem from "../card-item/card-item.component"
import { CardListContainer } from "./card-list.styles"
import { Character } from "../../routes/home/home.component"

export type CardListProps = {
	characters: Character[]
}

const CardList: FC<CardListProps> = ({ characters }) => (
  <CardListContainer>
    {characters.map((character) => {
      return <CardItem key={character.id} character={character} />;
    })}
  </CardListContainer>
)

export default CardList