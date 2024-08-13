import { LoggerService } from "../services/logger.service"

export const loggerProviderFactory = () => {
  return new LoggerService();
}
