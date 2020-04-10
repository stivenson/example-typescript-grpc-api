import { IRead } from '@repositories/interfaces/IReadInterface'
import { IWrite } from '@repositories/interfaces/IWriteInterface'
import { Model } from 'sequelize-typescript'

const { log, error } = console

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    private model: T extends Model<any>? any : any

    constructor(model: T extends Model<any>? any: any) {
        this.model = model
    }
    async findAll(): Promise<T[]> {
        return await this.model.findAll()
    }
    async find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.")
    }
    async findOne(id: string, arrNames: string[]): Promise<T> {
        throw new Error("Method not implemented.")
    }
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.")
    }    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}
