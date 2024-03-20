import { Request } from 'express';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // retrieving auth token from headers
    const token = this.extractTokenFromHeader(request);

    // verifying and decoding token to get data
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.AUTH_SECRET,
      });

      // storing decoded data to request object in order to access them while processing the request
      request['user'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid Token');
    }
  }

  validateRequest(request: any): boolean {
    return;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
