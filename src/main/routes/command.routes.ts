import { adaptRoute } from '@/main/adapters'
import { makeSendCommandController } from '@/main/factories'

import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.put('/send-command', auth, adaptRoute(makeSendCommandController()))
}
