import { Injectable } from '@nestjs/common';

import { BRAND_SEED, CARS_SEED } from './data';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}
  populateDB() {
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    return 'BRAND_SEED inserted';
  }
}
