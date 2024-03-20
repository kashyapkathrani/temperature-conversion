import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findOne(email: string) {
    return {
      id: 123,
      name: 'Kashyap Kathrani',
      email: 'kashyap@gmail.com',
      // stored in encrypted format in database
      password: 'correct',
    };
  }
}
