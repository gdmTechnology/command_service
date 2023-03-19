import { CheckActuatorRepository } from '@/data/protocols/db'

export class CheckActuatorRepositorySpy implements CheckActuatorRepository {
    params: any
    result: any = true
    async check(data: any): Promise<boolean> {
        this.params = data
        return this.result
    }
}
