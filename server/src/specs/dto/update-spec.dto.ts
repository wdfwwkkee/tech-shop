import { CreateSpecDto } from './create-spec.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSpecDto extends PartialType(CreateSpecDto) {}
