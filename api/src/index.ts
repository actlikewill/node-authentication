import mongoose from 'mongoose'
import express from 'express'
import Redis  from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { 
   REDIS_OPTIONS,
   SESSION_OPTIONS,
   MONGO_URI,
   MONGO_OPTIONS,
   APP_PORT
   } from './config'

;(async () => {
   await mongoose.connect( MONGO_URI, MONGO_OPTIONS )
})()

const RedisStore = connectRedis( session )

let client = new Redis(REDIS_OPTIONS)



const app = express()


app.use(session({...SESSION_OPTIONS, store: new RedisStore({ client })}))

app.get('/', ( req, res ) => res.json({ message: 'OK'}))

app.listen( APP_PORT, () => console.log('PORT 3000'))