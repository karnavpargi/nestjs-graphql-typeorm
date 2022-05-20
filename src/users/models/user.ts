import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: true })
  id: number;

  @Field({ name: 'yourname' })
  name: string;

  @Field({ name: 'youremail' })
  email: string;

  @Field()
  password: string;
}
