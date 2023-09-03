import { Car } from './interfaces/car.interfaces';
import { CreateCarDTO } from './dto/create-car.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

@Injectable()
export class CarsService {
    private cars = [
        { id: uuid(), brand: 'toyota', model: 'Rav4' },
        { id: uuid(), brand: 'honda', model: 'Civic' },
        { id: uuid(), brand: 'jeep', model: 'Compass' },
    ];

    findAll() {
        return this.cars;
    }

    finOneByID(id: string) {
        const car = this.cars.find(item => item.id === id)
        if (!car) throw new NotFoundException(`Car with ${id} not found`)

        return car
    }

    createCar(createCarDTO: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            ...createCarDTO
        }
        this.cars.push(car)
        return car;
    }

}
