import { FC } from "react"
import { Character } from "../../routes/home/home.component"
import { CardInfo, CardItemContainer, CharacterImage } from "./card-item.styles"

export type CardItemProps = {
	character: Character
}

const CardItem: FC<CardItemProps> = ({ character }) => {
	const { name, status, gender, image } = character
	return (
		<CardItemContainer>
			<CharacterImage src={image} />
			<CardInfo>
				{name}
				{status}
			</CardInfo>
		</CardItemContainer>
	)
}

export default CardItem