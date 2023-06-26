import { ImgOptions, Stats } from "../interfaces/index"

export class Pokemon {
  public name: string
  public nickname: string
  public types: string[]
  public stats: Stats
  public images: ImgOptions

  public constructor(name: string, types: string[], stats: Stats, images: ImgOptions, nickname?: string) {
    this.name     = name
    this.types    = types
    this.stats    = stats
    this.nickname = nickname !== undefined ? nickname : name
    this.images   = images
  }

  public copy() {
    return new Pokemon(this.name, this.types, this.stats, this.images, this.nickname)
  }
}