import 'module-alias/register';

import { UsersRepository } from '@repositories/users'
import initDb from '@postgresql/index'
import config from '@postgresql/config'
import { IUsers } from '@repositories/interfaces/IUser';
import User from '@models/users';

// creating a function that execute self runs
export const init = async <T>(): Promise<IUsers[]> => {
    // initializing the postgresql database
    const sequelize = initDb(config)
    await sequelize.sync();
    // initializing the repository
    const repository = new UsersRepository(User);
    // call create method from generic repository
    const users = await repository.findAll();
    /*users.forEach(user => {
        log('---------> users ', arrUsers)
    });*/
    const arrUsers = users as any as IUsers[]
    return arrUsers
}
