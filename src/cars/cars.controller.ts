import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['toyota', 'honda', 'jeep'];
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarByID(@Param('id') id: number) {
    return this.cars[id];
  }
}
