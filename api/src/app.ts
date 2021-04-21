import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { serverError, notFound } from './middleware'
import routes from './routes'




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

  public initializeRoutes ( routes: express.RequestHandler[] ) {
    this.initializeHandlers ( routes )
  }
    
  public initializeMiddleware ( middleware: express.RequestHandler[] ) {
    this.initializeHandlers ( middleware ) 
  }
  
  public initializeErrorHandlers ( errorHandlers: Array<express.ErrorRequestHandler | express.RequestHandler> ) {
    this.initializeHandlers ( errorHandlers )
  }

}

export const createApp = ( store : Store ) => {
  
  const app = new App ( express () ) 

  const middleware = [
    express.json(), 
    session ( { ...SESSION_OPTIONS, store } )
  ]

  const errorHandlers = [ notFound, serverError ]

  app.initializeMiddleware ( middleware )
  
  app.initializeRoutes ( routes )

  app.initializeErrorHandlers ( errorHandlers ) 

  return app 
  
}