export class CreateCarDTO {
    // DTO needs to be class because interfaces doesn't allow make validation on transf
    readonly brand: string;
    readonly model: string;
}