import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
const { NODE_ENV, DB_PASSWORD, DB_HOST, DATABASE, DB_PORT, DB_USERNAME } = process.env;
const DbConfigs: MysqlConnectionOptions = {
  type: 'mysql',
  database: DATABASE || 'nestjs',
  host: DB_HOST || 'localhost',
  port: +DB_PORT || 3306,
  username: DB_USERNAME || 'root',
  password: DB_PASSWORD || 'root',
  entities: ['dist/entities/*.entity.js'],
  synchronize: NODE_ENV == 'development' ? true : false,
};

export default DbConfigs;
