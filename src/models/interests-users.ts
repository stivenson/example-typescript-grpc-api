import * as joi from '@hapi/joi'
import { AutoIncrement, Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript'
import User from '@models/users';
import Interests from '@models/interests';

export const joiValidationRules = joi
    .object({
        id: joi.number().required(),
        name: joi.string().required(),
        description: joi.string().required()
    })
    .label('Profession')

@Table({ tableName: "interests_users" })
class InterestsUsers extends Model<InterestsUsers>{

    @PrimaryKey
    @AutoIncrement
    @Column
    public id!: number

    @ForeignKey(() => User)
    @Column
    public usersId!: number

    @ForeignKey(() => Interests)
    @Column
    public interestsId!: number

    @CreatedAt
    public creationDate!: Date;

    @UpdatedAt
    public updatedOn!: Date;

}

export default InterestsUsers
