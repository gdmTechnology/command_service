export interface CheckActuator {
    handle: (data: CheckActuator.Params) => Promise<boolean>
}

export namespace CheckActuator {
    export type Params = {
        deviceIdentification: string
        accountId: string
        actuatorIdentification: string
        actuatorCurrentValue: string
    }
}
