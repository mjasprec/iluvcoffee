import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  // ? Find all coffee

  findAll() {
    return this.coffeeRepository.find();
  }

  // ? Find a coffee

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne({ where: { id: +id } });

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }

    return coffee;
  }

  // ? Create a new coffee
  async create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee = await this.coffeeRepository.create(createCoffeeDto);

    return this.coffeeRepository.save(newCoffee);
  }

  // ? Update a coffee

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }

    return this.coffeeRepository.save(coffee);
  }

  // ? Remove a coffee

  async remove(id: string) {
    const coffee = await this.findOne(id);

    return this.coffeeRepository.remove(coffee);
  }
}
