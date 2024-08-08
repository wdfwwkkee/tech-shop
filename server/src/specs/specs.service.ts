import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateSpecDto } from "./dto/create-spec.dto";
import { UpdateSpecDto } from "./dto/update-spec.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Spec } from "./entities/spec.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Catalog } from "src/catalog/entities/catalog.entity";
import { SpecCategory } from "../catalog/dto/spec-category.dto";

@Injectable()
export class SpecsService {
  constructor(
    @InjectRepository(Spec) private readonly specRepository: Repository<Spec>,
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,

    private readonly jwtService: JwtService
  ) {}

  async create(createSpecDto: CreateSpecDto) {
    const existCatalog = await this.catalogRepository.findOne({
      where: {
        id: createSpecDto.catalog_id,
      },
    });
    if (!existCatalog) throw new BadRequestException("catalog not found");
    const existSpec = await this.specRepository.findOne({
      where: {
        catalog: { id: createSpecDto.catalog_id },
        title: createSpecDto.title,
      },
    });

    if (existSpec) throw new BadRequestException("This spec already exist");
    const spec = await this.specRepository.save({
      title: createSpecDto.title,
      value: createSpecDto.value,
      catalog: { id: createSpecDto.catalog_id },
    });

    return spec;
  }

  async findAll() {
    const data = await this.specRepository.find();

    if (data.length === 0) throw new BadRequestException("spec is empty");
    return data;
  }

  async findOne(id: number) {
    const data = await this.specRepository.findOne({
      where: { id },
    });
    if (!data) throw new NotFoundException(`spec with ${id}id Not Found`);
    return data;
  }


  async update(id: number, updateSpecDto: UpdateSpecDto) {
    const spec = await this.specRepository.findOne({
      where: { id },
    });
    if (!spec) throw new NotFoundException("spec not found");
    return await this.specRepository.update(id, updateSpecDto);
  }

  remove(id: number) {
    return `This action removes a #${id} spec`;
  }
}
