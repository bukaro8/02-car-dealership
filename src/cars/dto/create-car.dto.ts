import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  public readonly name: string;
  @IsString()
  public readonly model: string;
}
