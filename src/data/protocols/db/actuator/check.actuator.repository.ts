import { CheckActuator } from '@/domain/usecases'

export interface CheckActuatorRepository {
    check: (data: CheckActuator.Params) => Promise<boolean>
}
