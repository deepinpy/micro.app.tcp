import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { GrpcMethod } from '@nestjs/microservices';

interface INumberArray{
  data: number[];
}

interface ISumOfNumberArray{
  sum: number;
}

@Controller()
export class AppController{
  private logger = new Logger('AppController');

  constructor(private mathService: MathService){}

  @GrpcMethod('AppController', 'Accmulate')
  accmulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray{
    this.logger.log('adding' + numberArray.data.toString());
    return { sum: this.mathService.accmulate(numberArray.data) };
  }
}
