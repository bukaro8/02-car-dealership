import { randomUUID as uuid } from 'crypto';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'brand1',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand2',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand3',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand4',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'brand5',
    createdAt: new Date().getTime(),
  },
];
