import { CheckActuator, Publish } from '@/domain/usecases'

export class CheckActuatorSpy implements CheckActuator {
    input: any
    result = true
    async handle(input: CheckActuator.Params): Promise<any> {
        this.input = input
        return this.result
    }
}

export class PublishSpy implements Publish {
    input: any
    async send(input: Publish.Params): Promise<any> {
        this.input = input
        return this.input
    }
}
