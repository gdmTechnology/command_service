import { CheckActuatorRepository } from '@/data/protocols'
import { ActuatorModel } from './models'

export class ActuatorMongoRepository implements CheckActuatorRepository {
    async check(data: CheckActuatorRepository.Params): Promise<boolean> {
        const { actuatorCurrentValue, ...filter } = data
        const actuator = await ActuatorModel.findOne(filter)
        return !!actuator
    }
}
