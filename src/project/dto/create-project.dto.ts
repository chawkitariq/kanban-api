import { Transform, Type } from "class-transformer"
import { IsDateString, IsDefined, IsNotEmpty, IsString } from "class-validator"

export class CreateProjectDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    description: string

    @IsDateString()
    @IsDefined()
    @IsNotEmpty()
    startAt: Date

    @IsDateString()
    @IsDefined()
    @IsNotEmpty()
    endAt: Date
}
