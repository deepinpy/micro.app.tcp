import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService{
    public accmulate(data: number[]): number{
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
}