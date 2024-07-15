import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Current limit ${limit} current offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This is the param id ${id}`;
  }

  @Post()
  create(@Body('email') createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return `Coffee ${id} ${updateCoffeeDto.name} ${updateCoffeeDto.brand}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Coffee to delete ${id}`;
  }
}
