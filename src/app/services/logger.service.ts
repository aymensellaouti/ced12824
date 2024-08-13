export class LoggerService {
  logger(message: any): void {
    console.log('From Logger');
    console.log({message});
  }
}
