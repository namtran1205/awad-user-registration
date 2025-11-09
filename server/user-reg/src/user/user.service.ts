import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { User, UserDocument } from "./user.schema";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async register(dto: RegisterDto) {
        // Check if email already exists
        const existing = await this.userModel.findOne({ email: dto.email });
        if (existing) {
            throw new ConflictException('Email is already registered.');
        }

        try {
            // Hash password and create user
            const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) ?? 10;
            const hashed = await bcrypt.hash(dto.password, saltRounds);

            // Create and save the new user
            const user = await this.userModel.create({
                email: dto.email,
                password: hashed,
            });
            
            // Return success response
            return {
                message: 'User registered successfully.',
                user: { id: user._id.toString(), email: user.email, createdAt: user.createdAt?.toISOString() },
            };
        } catch (error) {
            // Handle unexpected errors
            throw new InternalServerErrorException('Error registering user.');
        }
    }
}