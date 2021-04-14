import chalk from 'chalk'
import mongoose from 'mongoose'
import Redis  from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { createApp } from './app'
import { log } from './utilities'
import { 
   REDIS_OPTIONS,
   MONGO_URI,
   MONGO_OPTIONS,
   APP_PORT
   } from './config'

;(async () => {
   await mongoose.connect( MONGO_URI, MONGO_OPTIONS )
      .then ( () => log ( chalk.green ( 'Database Connected !!') ) )
      .catch ( e => log ( chalk.red ( 'DataBase Connection Error ---' ), chalk.red ( e )  ) )
      
      const RedisStore = connectRedis ( session )
      
      const client = new Redis ( REDIS_OPTIONS ) 
      
      const store = new RedisStore ({ client })
      
      const app = createApp ( store ) 
      
      app.listen ( APP_PORT, () => console.log(`App listening on PORT ${APP_PORT}`) )
      
   })()