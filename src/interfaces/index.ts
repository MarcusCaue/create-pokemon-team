export interface StylesMode {
  baseText: string,
  contrastText: string,
  backgroundOne: string,
  backgroundSecond: string
}

export interface ImgOptions {
  official: string,
  pixelated: string,
  animated: string
}

export interface Stats {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
}

export interface TypesPokemonPokeApi {
  slot: number,
  type: {
    name: string,
    url: string
  }
}