import { IsInt, IsPositive } from 'class-validator';

export class CreateTrackingDto {
  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  itemId: number;

  @IsInt()
  progress: number;
}
