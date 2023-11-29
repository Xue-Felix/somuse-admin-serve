import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Users } from './entities/user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  createOrSave(user) {
    return this.userRepository.save(user);
  }

  update(user, updateData) {
    return this.userRepository.update(user, updateData);
  }
}
