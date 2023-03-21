export interface KafkaSendData {
    send: (message: KafkaSendData.Request) => Promise<void>
}

export namespace KafkaSendData {
    export type Request = {
        deviceIdentification: string
        accountId: string
        actuatorIdentification: string
        actuatorCurrentValue: string
    }
}
