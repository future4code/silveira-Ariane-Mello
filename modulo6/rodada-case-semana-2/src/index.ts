import app from './app'
import { competitionRouter } from './router/competitionRouter'
import { resultRouter } from './router/resultRouter'

app.use('/competition', competitionRouter)

app.use('/result', resultRouter)