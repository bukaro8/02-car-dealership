import { IsNumber, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateBrandDto {
  // @IsString()
  // @IsUUID()
  // public readonly id: string;

  @IsString()
  @MinLength(1)
  public readonly name: string;

  // @IsNumber()
  // public readonly createdAt: number;
}
