import { getRepository, Repository } from "typeorm";
import { Genre } from "../../entities/Genres";
import { IGenresRepository } from "../IGenresRepository";


export class GenresRepository implements IGenresRepository {

  private repository: Repository<Genre>;

  constructor(){
    this.repository = getRepository(Genre);
  }

  async findAllGenres(): Promise<Genre[]> {
    
    return await this.repository.createQueryBuilder().getMany();
  }

}