import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8, { message: 'Password is too short. Minimum length is 8 characters.' })
    password: string;
}