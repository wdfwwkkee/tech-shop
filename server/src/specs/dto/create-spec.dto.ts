import { IsOptional } from "class-validator";
import { Catalog } from "src/catalog/entities/catalog.entity";

export class CreateSpecDto {

  title: string;

  catalog_id : number;

  value: string;

  @IsOptional()
  catalog? : Catalog;
}
