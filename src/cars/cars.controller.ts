import { CarsService } from './cars.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id') id: number) {
    return this.carsService;
  }
}
