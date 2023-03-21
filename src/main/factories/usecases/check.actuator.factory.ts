import { CheckActuator } from '@/domain/usecases'
import { DbCheckActuator } from '@/data/usecases'
import { ActuatorMongoRepository } from '@/infra/db/mongodb'

export const makeDbCheckActuator = (): CheckActuator => {
    const actuatorMongoRepository = new ActuatorMongoRepository()
    return new DbCheckActuator(actuatorMongoRepository)
}
