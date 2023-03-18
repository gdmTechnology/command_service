export interface Publish {
    send: (data: Publish.Params) => Promise<void>
}

export namespace Publish {
    export type Params = {
        deviceIdentification: string
        accountId: string
        actuatorIdentification: string
        actuatorCurrentValue: string
    }
}
