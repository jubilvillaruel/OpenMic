import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'abc123',
            signOptions: { expiresIn: '1h' } // Token expiration time
        }),
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }])

    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [
    MongooseModule // <-- Export so other modules like AuthModule can use it
  ]
})
export class AuthModule {}
