import { ChangeEvent, FC } from "react"
import { Label, Select, SelectContainer } from "./select-status.styles"

export type SelectStatusProps = {
	className: string,
	onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectStatus: FC<SelectStatusProps> = ({ onChangeHandler }) => {
	return (
		<SelectContainer>
			<Label>Status</Label>
			<Select onChange={onChangeHandler}>
				<option value="">None</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">unknown</option>
			</Select>
		</SelectContainer>
	)
}

export default SelectStatus