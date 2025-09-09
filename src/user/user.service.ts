import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(Body: any) {
    const user = Body;

    return user;
  }
}
