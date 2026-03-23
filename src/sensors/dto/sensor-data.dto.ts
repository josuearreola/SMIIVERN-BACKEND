import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class SensorDataValuesDto {
  @IsOptional()
  @IsNumber()
  @Min(-40)
  @Max(85)
  temperature?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  humidity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(14)
  ph?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(20000)
  conductivity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(20000)
  tds?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5000)
  n?: number; // Nitrógeno

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5000)
  p?: number; // Fósforo

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5000)
  k?: number; // Potasio
}

export class SensorDataDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  device_id?: string;

  @IsDateString()
  timestamp: string;

  @ValidateNested()
  @Type(() => SensorDataValuesDto)
  @IsObject()
  data: SensorDataValuesDto;
}
