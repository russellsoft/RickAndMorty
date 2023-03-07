import styled from "styled-components";

export const SelectContainer = styled.div`
  display: grid;
`

export const Select = styled.select`
	padding: 1em;
  width: 130%;
  border-radius: .2em;
  color: #181820;
	:focus {
		outline: 0.5px solid white;
	}
`;

export const Label = styled.label`
  margin-bottom: .25em;
  font-weight: bold;
  font-size: 1.2em;
`

