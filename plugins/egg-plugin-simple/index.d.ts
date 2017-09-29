
import { Application } from 'egg';

export interface Application extends EggApplication {
  inline(): void;
}

export as namespace EggTypes;