import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class SayHello {
  constructor(private logger: LoggerService) {}
  hello() {
    this.logger.logger('HELLO');
  }
}
