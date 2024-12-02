import { randomUUID as uuid } from 'crypto';
import { CarOption } from 'src/cars/interfaces/car.interface';
export const CARS_SEED: CarOption[] = [
  {
    id: uuid(),
    name: 'name1',
    model: 'model1',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'name2',
    model: 'model2',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'name3',
    model: 'model3',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'name4',
    model: 'model4',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'name5',
    model: 'model5',
    createdAt: new Date().getTime(),
  },
];
