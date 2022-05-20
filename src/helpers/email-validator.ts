import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from '../users/users.service';

@ValidatorConstraint({ name: 'email', async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(readonly userService: UsersService) {}

  async validate(email: string) {
    const user = await this.userService.findOneByEmail(email);
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email is already in use';
  }
}
