import { CheckActuator } from '@/domain/usecases'

export interface CheckActuatorRepository {
    check: (data: CheckActuator.Params) => Promise<boolean>
}

export namespace CheckActuatorRepository {
    export type Params = CheckActuator.Params
}
