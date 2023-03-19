import { CheckActuator } from '@/domain/usecases'
import { CheckActuatorRepository } from '@/data/protocols'

export class DbCheckActuator implements CheckActuator {
    constructor(
        private readonly actuatorRepository: CheckActuatorRepository
    ) { }

    async handle(data: CheckActuator.Params): Promise<boolean> {
        const device = await this.actuatorRepository.check(data)
        return device
    }
}
