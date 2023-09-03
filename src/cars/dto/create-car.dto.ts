export class CreateCarDTO {
    // DTO needs to be class because interfaces doesn't allow make validation on transform
    readonly brand: string;
    readonly model: string;
}