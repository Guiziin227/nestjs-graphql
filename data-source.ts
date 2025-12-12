import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config(); // Carrega as variáveis do arquivo .env

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'], // Aponta para as entidades compiladas
  migrations: ['dist/migrations/*.js'], // Aponta para as migrações compiladas
  synchronize: false, // Nunca use synchronize: true em produção
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
