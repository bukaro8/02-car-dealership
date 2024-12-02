import { Injectable, NotFoundException } from '@nestjs/common';
import { CarOption } from './interfaces/car.interface';
import { randomUUID as uuid } from 'crypto';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Brand } from 'src/brands/entities/brand.entity';

@Injectable()
export class CarsService {
  private cars: CarOption[] = [
    // { id: uuid(), name: 'Toyota', model: 'Corolla' },
    // { id: uuid(), name: 'Honda', model: 'Civic' },
    // { id: uuid(), name: 'Jeep', model: 'Cherokee' },
  ];
  public findAll() {
    return { count: this.cars.length, cars: this.cars };
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car)
      throw new NotFoundException(`the car with id:"${id}" could't be found`);
    return car;
  }

  public createCar(createCarDto: CreateCarDto) {
    const id = uuid();
    const createdAt = new Date().getTime();
    const car = { id, createdAt, ...createCarDto };
    this.cars.push(car);
    return car;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    // let car = this.cars.find((car) => car.id === id);
    let carDb: CarOption = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });

    return carDb;
  }
  public deleteCar(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  public fillCarsWithSeedData(cars: CarOption[]) {
    this.cars = cars;
  }
}
