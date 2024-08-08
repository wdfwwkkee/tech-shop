import { Controller, Get, Post, Body, Patch,Req, Param, Delete, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { SpecsService } from './specs.service';
import { CreateSpecDto } from './dto/create-spec.dto';
import { UpdateSpecDto } from './dto/update-spec.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SpecCategory } from '../catalog/dto/spec-category.dto';

@Controller('specs')
export class SpecsController {
  constructor(private readonly specsService: SpecsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createSpecDto: CreateSpecDto) {
    return this.specsService.create(createSpecDto);
  }

  @Get()
  findAll() {
    return this.specsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specsService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecDto: UpdateSpecDto) {
    return this.specsService.update(+id, updateSpecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specsService.remove(+id);
  }
}
