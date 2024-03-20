import { Body, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fahrenheit-celsius')
  convertFahrenheitToCelsius(@Query('temperature') temperature): number {
    return this.appService.convertFahrenheitToCelsius(temperature);
  }
}
