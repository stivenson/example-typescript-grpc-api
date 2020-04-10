import { Model } from 'sequelize-typescript'

export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string, arrNames: Array<string>): Promise<T>;
    findAll(): Promise<T[]>;
}
