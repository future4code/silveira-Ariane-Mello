import app from './app'
import { paymentRouter } from './router/paymentRouter'

app.use('/wirecard', paymentRouter)