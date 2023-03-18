import { Controller, HttpResponse, Validation } from '../protocols'
import { CheckActuator, Publish } from '@/domain/usecases'
import { badRequest, noContent, serverError } from '../helpers'
import { DeviceNotFoundError } from '../errors'
export class SendCommandController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly checkActuator: CheckActuator,
        private readonly publish: Publish
    ) { }

    async handle(request: SendCommandController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) return badRequest(error)
            const exists = await this.checkActuator.handle(request)
            if (!exists) return badRequest(new DeviceNotFoundError())
            await this.publish.send(request)
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace SendCommandController {
    export interface Request {
        deviceIdentification: string
        accountId: string
        actuatorIdentification: string
        actuatorCurrentValue: string
    }
}
