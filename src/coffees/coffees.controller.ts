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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Current limit ${limit} current offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This is the param id ${id}`;
  }

  @Post()
  create(@Body('email') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Coffee ${id} ${body.name} ${body.type}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Coffee to delete ${id}`;
  }
}
