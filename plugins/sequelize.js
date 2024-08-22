import sequelize from '~/server/config';

export default async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};
