export interface Validation {
    validate(data: any): Promise<any>;
}