import { DbPublishData } from '@/data/usecases/publish.data'

class SendMsg {
    async send(message): Promise<void> {

    }
}

const mockParams = (): any => ({
    deviceIdentification: 'deviceIdentification',
    accountId: 'accountId',
    actuatorIdentification: 'actuatorIdentification',
    actuatorCurrentValue: 'actuatorCurrentValue'
})
type SutTypes = {
    sut: DbPublishData
    sendMessage: SendMsg
}

const makeSut = (): SutTypes => {
    const sendMessage = new SendMsg()
    const sut = new DbPublishData(sendMessage)
    return { sut, sendMessage }
}

describe('DbPublishData', () => {
    test('Should call send with correct values', async () => {
        const { sut, sendMessage } = makeSut()
        const call = jest.spyOn(sendMessage, 'send')
        await sut.send(mockParams())
        expect(call).toBeCalled()
    })
})
