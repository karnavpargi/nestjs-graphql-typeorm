import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class commonResponseDto {
  @Field(() => Int, { defaultValue: 200 })
  statusCode?: number;

  @Field(() => String, { defaultValue: 'success' })
  message: string;
}

@ObjectType()
export class commonObjectDto {
  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;
}
