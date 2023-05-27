import { SendCommandController } from '@/presentation/controllers'
import { ValidationSpy, CheckActuatorSpy, PublishSpy } from '../mocks'

const throwError = (): never => {
    throw new Error()
}
type SutTypes = {
    validationSpy: ValidationSpy
    checkActuatorSpy: CheckActuatorSpy
    publishSpy: PublishSpy
    sut: SendCommandController

}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const checkActuatorSpy = new CheckActuatorSpy()
    const publishSpy = new PublishSpy()
    const sut = new SendCommandController(validationSpy, checkActuatorSpy, publishSpy)
    return {
        validationSpy,
        checkActuatorSpy,
        publishSpy,
        sut
    }
}

const mockValidParams = (): SendCommandController.Request => ({
    deviceIdentification: 'deviceIdentification',
    accountId: 'accountId',
    actuatorIdentification: 'actuatorIdentification',
    actuatorCurrentValue: 'actuatorCurrentValue'
})

describe('SendCommandController', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        const request = mockValidParams()
        await sut.handle(request)
        expect(validationSpy.input).toEqual(request)
    })

    test('Should return 400 if validation fails', async () => {
        const { sut, validationSpy } = makeSut()
        validationSpy.error = new Error()
        const request = mockValidParams()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 500 if validation throws', async () => {
        const { sut, validationSpy } = makeSut()
        const request = mockValidParams()
        jest.spyOn(validationSpy, 'validate').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should call checkActuator with correct values', async () => {
        const { sut, checkActuatorSpy } = makeSut()
        const request = mockValidParams()
        await sut.handle(request)
        expect(checkActuatorSpy.input).toEqual(request)
    })

    test('Should return 400 if checkActuator fails', async () => {
        const { sut, checkActuatorSpy } = makeSut()
        checkActuatorSpy.result = false
        const request = mockValidParams()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 500 if checkActuato throws', async () => {
        const { sut, checkActuatorSpy } = makeSut()
        const request = mockValidParams()
        jest.spyOn(checkActuatorSpy, 'handle').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should call publish with correct values', async () => {
        const { sut, publishSpy } = makeSut()
        const request = mockValidParams()
        await sut.handle(request)
        expect(publishSpy.input).toEqual(request)
    })

    test('Should return 500 if publish throws', async () => {
        const { sut, publishSpy } = makeSut()
        const request = mockValidParams()
        jest.spyOn(publishSpy, 'send').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should return 204 if SendCommandController succeds', async () => {
        const { sut } = makeSut()
        const request = mockValidParams()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(204)
    })
})
