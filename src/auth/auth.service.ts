import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  async loginUser(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    // fetching user
    const user = await this.userService.findOne(email);

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid Password');
    }

    const payload = {
      user: { id: user.id, name: user.name, email: user.email },
    };

    return {
      accessToken: await this.generateToken(payload),
    };
  }

  // generating token
  async generateToken(payload: {
    user: { id: number; name: string; email: string };
  }): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
