import express, { RequestHandler } from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { serverError, notFound } from './middleware'
import { register } from './routes'



export const createApp = ( store : Store ) => {
  
  const app = express () 

  
  app.use ( express.json() )
  
  app.use ( session ( { ...SESSION_OPTIONS, store } ) ) 
  
  const modules = [ register, serverError, notFound ]

  modules.forEach( module => {
    
    app.use ( module )

  }) 

  return app 
  
}