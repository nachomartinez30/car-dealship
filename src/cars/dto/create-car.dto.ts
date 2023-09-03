import { IsString, MinLength } from 'class-validator';
export class CreateCarDTO {
    // DTO needs to be class because interfaces doesn't allow make validation on transform
    @IsString({ message: "brand must be a cool string" })
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}