import { Users } from './entities/user.mysql.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource) =>
      await AppDataSource.getRepository(Users),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
