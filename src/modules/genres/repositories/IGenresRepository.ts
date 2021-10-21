import { Genre } from "../entities/Genres";


export interface IGenresRepository {
  findAllGenres(): Promise<Genre[]>;
}