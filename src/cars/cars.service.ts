import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        { id: 0, brand: 'toyota', model: 'Rav4' },
        { id: 1, brand: 'honda', model: 'Civic' },
        { id: 2, brand: 'jeep', model: 'Compass' },
    ];
    findAll() {
        return this.cars;
    }
    finOneByID(id: number) {
        return this.cars[id]
    }
}
