import 'module-alias/register';

import { UsersRepository } from '@repositories/users'
import initDb from '@postgresql/index'
import config from '@postgresql/config'
import { IUsers } from '@repositories/interfaces/IUser';
import User from '@models/users';

// creating a function that execute self runs
export const initTables = async <T>(): Promise<boolean> => {
    // initializing the postgresql database
    const sequelize = initDb(config)
    await sequelize.sync();
    // initializing the repository
    const repository = new UsersRepository(User);

    // a initial call
    await repository.findAll();
    return true
}
