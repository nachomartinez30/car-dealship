import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

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
  getCarByID(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.finOneByID(id)
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDTO) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return { body, id }
  }

  @Delete(':id')
  removeCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return { body, id }
  }
}
