import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  convertFahrenheitToCelsius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
  }
}
