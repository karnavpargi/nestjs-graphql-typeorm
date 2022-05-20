import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbConfigs from './configs/typeorm.configs';
import { UsersModule } from './users/users.module';
import { validate } from './validations/env.validation';

const { NODE_ENV } = process.env;

const Modules = [UsersModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !NODE_ENV ? '.env' : `.env.${NODE_ENV}`,
      isGlobal: true,
      validate,
    }),
    TypeOrmModule.forRoot(DbConfigs),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      debug: NODE_ENV === 'development' ? true : false,
      playground: NODE_ENV === 'development' ? true : false,
      introspection: true,
      context: ({ req }) => {
        return { request: req };
      },
    }),
    ...Modules,
  ],
  providers: [],
})
export class AppModule {}
