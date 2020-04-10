import { Sequelize } from 'sequelize-typescript'
import User from '@models/users'
import { Config } from '@postgresql/config'
import Interests from '@models/interests';
import InterestsUsers from '@models/interests-users';
import Profession from '@models/professions';

export default function ({
  database,
  username,
  password,
  host,
  port
}: Config): Sequelize {
  const sequelize = new Sequelize({
    database,
    password,
    username,
    dialect: 'postgres',
    host,
    port
  });
  sequelize.addModels([
    User,
    Interests,
    InterestsUsers,
    Profession,
  ])

  return sequelize
}
