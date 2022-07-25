import app from './app'
import { competitionRouter } from './router/competitionRouter'

app.use('/competition', competitionRouter)