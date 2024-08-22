// Importing Sequelize using ES Modules
import { Sequelize } from 'sequelize';

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Export the sequelize instance
export default sequelize;
