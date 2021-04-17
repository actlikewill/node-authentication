import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { serverError } from './middleware'
import { register } from './routes'




export class App {

  public app : express.Application

  constructor ( 
    app: express.Application,  
    ) {
    this.app = app 

  }

  private initializeHandlers ( handlers : any[]) {
    handlers.forEach ( handler => this.app.use ( handler ) )
  } 

  public listen ( port : number, callback : () => void ) {
    this.app.listen ( port || 3000, callback )
  } 

  public initializeModules ( modules: express.RequestHandler[] ) {
    this.initializeHandlers ( modules )
  }
    
  public initializeMiddleware ( middleware: express.RequestHandler[] ) {
    this.initializeHandlers ( middleware ) 
  }
  
  public initializeErrorHandlers ( errorHandlers: express.ErrorRequestHandler[] ) {
    this.initializeHandlers ( errorHandlers )
  }

}

export const createApp = ( store : Store ) => {
  
  const app = new App ( express () ) 

  const middleware = [
    express.json(), 
    session ( { ...SESSION_OPTIONS, store } )
  ]

  const errorHandlers = [ serverError ]

  const modules = [ register ]
  
  app.initializeMiddleware ( middleware )
  
  app.initializeModules ( modules )

  app.initializeErrorHandlers ( errorHandlers ) 

  return app 
  
}