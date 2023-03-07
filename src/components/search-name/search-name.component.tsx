import { FC, ChangeEvent } from "react"
import { Label, SelectContainer } from "../select-status/select-status.styles"
import { Input } from "./search-name.styles"

export type SearchNameProps = {
	className: string,
	placeholder?: string,
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchName: FC<SearchNameProps> = ({ onChangeHandler }) => {
	return (
		<SelectContainer>
			<Label>Search</Label>
			<Input type="text" placeholder="Search" onChange={onChangeHandler} />
		</SelectContainer>
	)
}

export default SearchName