import app from './app'
import { dogHeroRouter } from './router/dogHeroRouter'

app.use('/dogHero', dogHeroRouter)
