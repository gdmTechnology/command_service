import { SendCommandController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbCheckActuator, makeDbPublishData, makeLogControllerDecorator, makeSendCommandValidation } from '@/main/factories'

export const makeSendCommandController = (): Controller => {
    const controller = new SendCommandController(makeSendCommandValidation(), makeDbCheckActuator(), makeDbPublishData())
    return makeLogControllerDecorator(controller)
}
