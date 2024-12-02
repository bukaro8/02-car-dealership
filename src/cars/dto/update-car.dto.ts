import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  public readonly id?: string;

  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly model?: string;
}
