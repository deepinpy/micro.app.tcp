import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // create a logger instance
  private logger = new Logger('AppController');

  // inject the math service
  constructor(private mathService: MathService){}

  // define the message pattern for this method
  @MessagePattern('add')
  // define the logic to be executed
  async accmulate(data: number[]){
    this.logger.log(' adding ' + data.toString()); // log somthing on every call
    return this.mathService.accmulate(data); // use math service to calc result and return
  }
}
