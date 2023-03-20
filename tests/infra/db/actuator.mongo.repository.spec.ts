import { ActuatorMongoRepository } from '@/infra/db/mongodb'
import { MongoTestDbHelper } from './db.handler'

const makeSut = (): ActuatorMongoRepository => {
    return new ActuatorMongoRepository()
}

const mockParams = (): any => ({
    deviceIdentification: 'deviceIdentification',
    accountId: 'accountId',
    actuatorIdentification: 'actuatorIdentification',
    actuatorCurrentValue: 0
})

describe('ActuatorMongoRepository', () => {
    beforeAll(async () => await MongoTestDbHelper.connect())
    afterEach(async () => await MongoTestDbHelper.clearDatabase())
    afterAll(async () => await MongoTestDbHelper.disconnect())

    describe('save()', () => {
        test('Should return an account on success', async () => {
            const sut = makeSut()
            const request = mockParams()
            const dvc = await sut.check(request)
            expect(dvc).toBeFalsy()
        })
    })
})
