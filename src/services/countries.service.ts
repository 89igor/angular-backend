import { Injectable } from '@nestjs/common';
import { UpdateCountryDto } from 'src/modules/country/dto/update-country.dto';
import { CreateCountryDto } from 'src/modules/country/dto/create-country.dto';

@Injectable()
export class CountriesService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all countries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
