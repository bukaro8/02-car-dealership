import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  // @IsNumber()
  // public readonly updatedAt: number;
  @IsString()
  @IsUUID()
  @IsOptional()
  public readonly id: string;

  @IsString()
  public readonly name: string;
}
