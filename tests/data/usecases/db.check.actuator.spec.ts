import { DbCheckActuator } from '@/data/usecases'
import { CheckActuatorRepositorySpy } from '../mocks'

type SutTypes = {
    checkActuatorRepositorySpy: CheckActuatorRepositorySpy
    sut: DbCheckActuator
}

const throwError = (): never => {
    throw new Error()
}

const makeSut = (): SutTypes => {
    const checkActuatorRepositorySpy = new CheckActuatorRepositorySpy()
    const sut = new DbCheckActuator(checkActuatorRepositorySpy)
    return { sut, checkActuatorRepositorySpy }
}

const mockParams = (): any => ({
    deviceIdentification: 'deviceIdentification',
    accountId: 'accountId',
    actuatorIdentification: 'actuatorIdentification',
    actuatorCurrentValue: 'actuatorCurrentValue'
})

describe('DbCheckActuator', () => {
    test('Should call actuatorRepository with correct values', async () => {
        const { sut, checkActuatorRepositorySpy } = makeSut()
        const params = mockParams()
        await sut.handle(params)
        expect(checkActuatorRepositorySpy.params).toEqual(params)
    })

    test('Should return true if actuatorRepository succeds', async () => {
        const { sut } = makeSut()
        const params = mockParams()
        const resp = await sut.handle(params)
        expect(resp).toBeTruthy()
    })

    test('Should return false if actuatorRepository fail', async () => {
        const { sut, checkActuatorRepositorySpy } = makeSut()
        const params = mockParams()
        checkActuatorRepositorySpy.result = false
        const resp = await sut.handle(params)
        expect(resp).toBeFalsy()
    })

    test('Should throw if checkActuatorRepository throws', async () => {
        const { sut, checkActuatorRepositorySpy } = makeSut()
        const params = mockParams()
        jest.spyOn(checkActuatorRepositorySpy, 'check').mockImplementationOnce(throwError)
        const resp = sut.handle(params)
        await expect(resp).rejects.toThrowError()
    })
})
