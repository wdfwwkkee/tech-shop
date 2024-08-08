import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CatalogService } from "./catalog.service";
import { CreateCatalogDto } from "./dto/create-catalog.dto";
import { UpdateCatalogDto } from "./dto/update-catalog.dto";
import { CategoryTagDto } from "./dto/category.dto";
import { SpecCategory } from "./dto/spec-category.dto";

@Controller("catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  create(@Body() createCatalogDto: CreateCatalogDto) {
    return this.catalogService.create(createCatalogDto);
  }

  @Post('tag')
  findByTag(@Body() tag: CategoryTagDto) {
    return this.catalogService.findByTag(tag);
  }

  @Post('getSpec')
  findBySpec(@Body() tag: SpecCategory) {
    return this.catalogService.findSpec(tag);
  }
  @Get('get-category')
  findCategory() {
    return this.catalogService.getCategory();
  }


  @Post('get-spec')
  findSpecByTag(@Body() tag: CategoryTagDto) {
    return this.catalogService.findByTag(tag);
  }

  @Get()
  findAll() {
    return this.catalogService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.catalogService.findOne(+id);
  }



  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCatalogDto: UpdateCatalogDto) {
    return this.catalogService.update(+id, updateCatalogDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.catalogService.remove(+id);
  }
}
