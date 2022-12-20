import dotenv from 'dotenv';

dotenv.config({ path: 'mysql/.env' });

export default{
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
}
