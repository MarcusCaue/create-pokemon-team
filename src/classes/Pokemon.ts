import { Stats } from "../interfaces/index"

export class Pokemon {
  public name: string
  public types: string[]
  public stats: Stats

  public constructor(name: string, types: string[], stats: Stats) {
    this.name  = name
    this.types = types
    this.stats = stats
  }
}