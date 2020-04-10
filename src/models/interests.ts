import * as joi from '@hapi/joi'
import { AutoIncrement, Column, Model, Table, Unique, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import User from '@models/users';
import InterestsUsers from '@models/interests-users';

export const joiValidationRules = joi
    .object({
        id: joi.number().required(),
        name: joi.string().required(),
        description: joi.string().required()
    })
    .label('Profession')

@Table({ tableName: "interests" })
class Interests extends Model<Interests>{

    @PrimaryKey
    @AutoIncrement
    @Column
    public id!: number

    @Unique
    @Column
    public name!: string

    @Column
    public description!: string

    @BelongsToMany(() => User, () => InterestsUsers)
    public users!: User[]

    @CreatedAt
    public creationDate!: Date;

    @UpdatedAt
    public updatedOn!: Date;

    @DeletedAt
    public deletionDate!: Date;

}

export default Interests
