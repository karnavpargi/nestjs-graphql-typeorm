import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInputDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public create(user: CreateUserInputDto) {
    this.userRepository.save(user);
  }

  public findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
