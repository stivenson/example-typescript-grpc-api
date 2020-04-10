import * as joi from '@hapi/joi'
import { AutoIncrement, Column, Model, Table, Unique, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript'
import User from '@models/users'

export const joiValidationRules = joi
    .object({
        id: joi.number().required(),
        name: joi.string().required(),
        description: joi.string().required()
    })
    .label('Profession')

@Table({tableName: "professions"})
class Professions extends Model<Professions>{

    @Unique
    @PrimaryKey
    @AutoIncrement
    @Column
    public id!: number

    @Unique
    @Column
    public name!: string

    @Column
    public description!: string

    @HasMany(() => User)
    public users!: User[] 

    @CreatedAt
    public creationDate!: Date;

    @UpdatedAt
    public updatedOn!: Date;

    @DeletedAt
    public deletionDate!: Date;

}

export default Professions
