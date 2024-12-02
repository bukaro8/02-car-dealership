import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';

import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  public getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  public getCarById(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
  @Post()
  // @UsePipes(ValidationPipe)
  public createCar(@Body() createCarDto: CreateCarDto) {
    const newCar = this.carsService.createCar(createCarDto);
    return newCar;
  }

  @Patch(':id')
  public updateCar(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const updated = this.carsService.updateCar(id, updateCarDto);
    return updated;
  }

  @Delete(':id')
  public deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
