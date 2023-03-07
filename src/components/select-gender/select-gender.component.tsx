import { FC } from "react"
import { SelectStatusProps } from "../select-status/select-status.component"
import { Label, Select, SelectContainer } from "../select-status/select-status.styles"

const SelectGender: FC<SelectStatusProps> = ({ onChangeHandler }) => {
	return (
		<SelectContainer>
			<Label>Gender</Label>
			<Select onChange={onChangeHandler}>
				<option value="">None</option>
				<option value="Female">Female</option>
				<option value="Male">Male</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</Select>
		</SelectContainer>
	)
}

export default SelectGender