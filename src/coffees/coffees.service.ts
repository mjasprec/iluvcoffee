import { Injectable } from '@nestjs/common';
import { CoffeeTypes } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: CoffeeTypes[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['vanilla', 'chocolate'],
    },
  ];
}
