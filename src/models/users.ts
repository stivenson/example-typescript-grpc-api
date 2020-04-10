import * as joi from '@hapi/joi'
import { AutoIncrement, Comment, Column, Model, Table, Unique, PrimaryKey, ForeignKey, BelongsTo, IsEmail, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany, Default } from 'sequelize-typescript'
import Profession from '@models/professions'
import Interests from '@models/interests'
import InterestsUsers from '@models/interests-users'

export const joiValidationRules = joi
    .object({
        id: joi.number().required(),
        name: joi.string().required(),
        professions_id: joi.number().required()
    })
    .label('User');

@Table({tableName: "users"})
class Users extends Model<Users>{

    @PrimaryKey
    @AutoIncrement
    @Column
    public id!: number

    @Column
    public name!: string

    @Column
    public description!: string

    @Column
    public photo!: string

    @Default(2)
    @Comment("1: admin. 2: client")
    @Column
    public typeUser!: number

    @ForeignKey(() => Profession)
    @Column
    public professionsId!: number

    @BelongsTo(() => Profession)
    public profession!: Profession

    @Unique
    @Column
    public username!: string

    @Unique
    @IsEmail
    @Column
    public email!: string

    @Column
    public password!: string

    @BelongsToMany(() => Interests, () => InterestsUsers)
    public interests!: Interests[]

    @CreatedAt
    public creationDate!: Date

    @UpdatedAt
    public updatedOn!: Date

    @DeletedAt
    public deletionDate!: Date

}

export default Users
