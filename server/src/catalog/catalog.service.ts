import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCatalogDto } from "./dto/create-catalog.dto";
import { UpdateCatalogDto } from "./dto/update-catalog.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Catalog } from "./entities/catalog.entity";
import { Repository } from "typeorm";
import { CategoryTagDto } from "./dto/category.dto";
import { SpecCategory } from "./dto/spec-category.dto";

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>
  ) {}
  async create(createCatalogDto: CreateCatalogDto) {
    const isExist = await this.catalogRepository.findBy({
      name: createCatalogDto.name,
    });
    if (isExist.length)
      throw new BadRequestException("This catalog already exist");
    const newCatalog = {
      name: createCatalogDto.name,
      price: createCatalogDto.price,
      img: createCatalogDto.img,
      availability: createCatalogDto.availability,
      tag: createCatalogDto.tag,
    };
    return await this.catalogRepository.save(newCatalog);
  }

  async findAll() {
    const catalogs = await this.catalogRepository.find({
      relations: {
        specs: true,
      },
    });
    if (!catalogs) throw new NotFoundException("Catalog not found");
    return catalogs;
  }

  async findOne(id: number) {
    const catalog = this.catalogRepository.findOne({
      where: { id },
      relations: {
        specs: true,
      },
    });
    if (!catalog) throw new NotFoundException("Catalog not found");
    return catalog;
  }

  async findByTag(categoryTagDto: CategoryTagDto) {
    const filteredCatalogs = await this.catalogRepository.find({
      where: { tag: categoryTagDto.tag },
      relations: {
        specs: true,
      },
    });
    if (!filteredCatalogs)
      throw new BadRequestException(
        `Item with ${categoryTagDto.tag} tag not exist`
      );
    return filteredCatalogs;
  }

  async findSpec(tag: SpecCategory) {
    const category = {
      Iphone: {
        name: "iphone",
        img: "iphone.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      Headphones: {
        name: "headphones",
        img: "airpods.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
      Laptop: {
        name: "laptop",
        img: "macbook.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      TV: {
        name: "tv",
        img: "tv.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
    };
    const data = Object.values(category).filter(
      (item) => item.name === tag.category
    );
    if (!data)
      throw new NotFoundException(`spec with ${tag.category} tag Not Found`);
    return Object.values(data[0].specs);
    return Object.values(data[0].specs);
  }

  async getCategory() {
    const category = {
      Iphone: {
        name: "iphone",
        img: "iphone.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      Headphones: {
        name: "headphones",
        img: "airpods.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
      Laptop: {
        name: "laptop",
        img: "macbook.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      TV: {
        name: "tv",
        img: "tv.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
    };
    return category;
  }

  async update(id: number, updateCatalogDto: UpdateCatalogDto) {
    const catalog = await this.catalogRepository.findOne({
      where: { id },
    });
    if (!catalog) throw new NotFoundException("Catalog not found");
    return await this.catalogRepository.update(id, updateCatalogDto);
  }

  async remove(id: number) {
    const catalog = await this.catalogRepository.findOne({
      where: { id },
    });
    if (!catalog) throw new NotFoundException("Catalog not found");
    return await this.catalogRepository.delete(id);
  }
}
