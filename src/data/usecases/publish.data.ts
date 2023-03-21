import { Publish } from '@/domain/usecases'
import { KafkaSendData } from '../protocols'

export class DbPublishData implements Publish {
    constructor(
        private readonly sendMessage: KafkaSendData
    ) { }

    async send(data: Publish.Params): Promise<void> {
        await this.sendMessage.send(data)
    }
}
