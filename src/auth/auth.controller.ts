import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginPayloadDto, LoginResponse } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginPayload: LoginPayloadDto): Promise<LoginResponse> {
    return this.authService.loginUser(
      loginPayload.email,
      loginPayload.password,
    );
  }
}
