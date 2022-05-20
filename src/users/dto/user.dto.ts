import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { EmailValidator } from '../../helpers/email-validator';
import { User } from '../models/user';

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field()
  statusCode?: number;

  @Field()
  message?: string;

  @Field()
  totalCount?: number;
}

export class GetUserArgsDto {
  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  age: string;

  @Field()
  name: string;

  @Field()
  surname: string;
}

@InputType()
export class LoginUserInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

@InputType()
export class CreateUserInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Validate(EmailValidator)
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
