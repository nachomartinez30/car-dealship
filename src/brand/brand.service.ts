import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {


  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto
    }
    this.brands.push(newBrand);
    return newBrand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find(item => item.id === id)
    if (!brand) throw new NotFoundException(`brand not found`);

    return brand
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
