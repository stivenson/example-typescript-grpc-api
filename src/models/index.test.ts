import { init } from '.'
import { IUsers } from '@repositories/interfaces/IUser';
const { log } = console

describe('Models', () => {
    test('test models', async done => {
        const iUsersArr = await init() as IUsers[]
        expect(init).toBeDefined()
        expect(typeof iUsersArr).toBe('object')
        // log("users in test -->", iUsersArr[0].name)
        // expect(typeof iUsersArr[0].name).toBe('string')
        return done()
    })
})
