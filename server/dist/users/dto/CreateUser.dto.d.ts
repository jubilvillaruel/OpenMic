export declare class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly gender?: string;
    readonly birthday?: Date;
    readonly accountType: string[];
}
