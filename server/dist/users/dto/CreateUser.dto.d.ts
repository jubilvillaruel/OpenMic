export declare class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly gender?: string;
    readonly birthday?: Date;
    readonly instruments?: string[];
    readonly genres?: string[];
}
