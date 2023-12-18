import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Middleware test...');
    next();
  }
}
