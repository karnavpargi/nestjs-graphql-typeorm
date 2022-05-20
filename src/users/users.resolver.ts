import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInputDto, UserResponse } from './dto/user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserResponse, {
    name: 'signUp',
    description: 'Signup User',
  })
  create(@Args('payload') data: CreateUserInputDto) {
    return this.usersService.create(data);
  }

  @Query(() => UserResponse, {})
  getUser(@Args('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }
}
