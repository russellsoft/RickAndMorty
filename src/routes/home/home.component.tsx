import { ChangeEvent, useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchName from "../../components/search-name/search-name.component";
import SelectGender from "../../components/select-gender/select-gender.component";
import SelectStatus from "../../components/select-status/select-status.component";
import { HomeContainer, SearchSelectBox } from "./home.styles";

export type Character = {
	id: number,
	name: string,
	status: string,
	gender: string,
	image: string
}

const Home = () => {
	const [characters, setCharacters] = useState([])
	const [filteredCharacters, setFilteredCharacters] = useState([])
	const [searchCharacterName, setSearchCharacterName] = useState('')
	const [selectCharacterStatus, setSelectCharacterStatus] = useState('')
	const [selectCharacterGender, setSelectCharacterGender] = useState('')

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((response) => response.json())
			.then((users) => setCharacters(users.results))
	}, [])

	useEffect(() => {
		const newCharacters = characters.filter((character: Character) => {
			return (
				character.gender.toLocaleLowerCase().includes(selectCharacterGender)
				&& character.name.toLocaleLowerCase().includes(searchCharacterName)
				&& character.status.toLocaleLowerCase().includes(selectCharacterStatus)
			)
		})
		setFilteredCharacters(newCharacters)
	}, [characters, selectCharacterGender, searchCharacterName, selectCharacterStatus])

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchCharacterName(searchFieldString)
	}

	const onSelectGenderChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const selectGenderField = event.target.value.toLocaleLowerCase()
		setSelectCharacterGender(selectGenderField)
	}

	const onSelectStatusChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const selectStatusField = event.target.value.toLocaleLowerCase()
		setSelectCharacterStatus(selectStatusField)
	}

	console.log(filteredCharacters)

	return (
		<HomeContainer>
			<SearchSelectBox>
				<SearchName
					className="character-search-box"
					onChangeHandler={onSearchChange}
				/>
				<SelectStatus
					className="character-select-status"
					onChangeHandler={onSelectStatusChange}
				/>
				<SelectGender
					className="character-select-gender"
					onChangeHandler={onSelectGenderChange}
				/>
			</SearchSelectBox>
			<CardList characters={filteredCharacters} />
		</HomeContainer>
	);
}

export default Home


/*

import { ChangeEvent, useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchName from "../../components/search-name/search-name.component";
import SelectGender from "../../components/select-gender/select-gender.component";
import SelectStatus from "../../components/select-status/select-status.component";
import { HomeContainer, SearchSelectBox } from "./home.styles";

export type Character = {
	id: number,
	name: string,
	status: string,
	gender: string,
	image: string
}

const Home = () => {
	const [characters, setCharacters] = useState([])
	const [filteredCharacters, setFilteredCharacters] = useState([])
	const [searchCharacterName, setSearchCharacterName] = useState('')
	const [selectCharacterStatus, setSelectCharacterStatus] = useState('')
	const [selectCharacterGender, setSelectCharacterGender] = useState('')

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((response) => response.json())
			.then((users) => setCharacters(users.results))
	}, [])

	useEffect(() => {
		const newCharacters = characters.filter((character: Character) => {
			return character.name.toLocaleLowerCase().includes(searchCharacterName)
		})
		setFilteredCharacters(newCharacters)
	}, [characters, searchCharacterName])

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchCharacterName(searchFieldString)
	}

	useEffect(() => {
		const newCharacters = characters.filter((character: Character) => {
			return character.status.toLocaleLowerCase().includes(selectCharacterStatus)
		})
		setFilteredCharacters(newCharacters)
	}, [characters, selectCharacterStatus])

	const onSelectStatusChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const selectStatusField = event.target.value.toLocaleLowerCase()
		setSelectCharacterStatus(selectStatusField)
	}

	useEffect(() => {
		const newCharacters = characters.filter((character: Character) => {
			return character.gender.toLocaleLowerCase().includes(selectCharacterGender)
		})
		setFilteredCharacters(newCharacters)
	}, [characters, selectCharacterGender])

	const onSelectGenderChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const selectGenderField = event.target.value.toLocaleLowerCase()
		setSelectCharacterGender(selectGenderField)
	}

	console.log(filteredCharacters)

	return (
		<HomeContainer>
			<SearchSelectBox>
				<SearchName
					className="character-search-box"
					onChangeHandler={onSearchChange}
				/>
				<SelectStatus
					className="character-select-status"
					onChangeHandler={onSelectStatusChange}
				/>
				<SelectGender
					className="character-select-gender"
					onChangeHandler={onSelectGenderChange}
				/>
			</SearchSelectBox>
			<CardList characters={filteredCharacters} />
		</HomeContainer>
	);
}

export default Home

*/