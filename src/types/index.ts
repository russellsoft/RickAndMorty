export type CharacterResponseType = {
  results: CharactersType;
  info: CharacterResponseInfoType;
};

export type CharacterType = {
  name: string;
  status: string;
  gender: string;
  image: string;
  id: number;
  location: {
    name: string;
  };
  episode: string[];
};

export type CharactersType = CharacterType[];

export type CharacterResponseInfoType = {
  count: number;
  next: string;
  pages: number;
};

export const characterGendersList: string[] = [
  "female",
  "male",
  "genderless",
  "unknown",
];

export const characterStatusList: string[] = ["alive", "dead", "unknown"];
