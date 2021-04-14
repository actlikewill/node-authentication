import { Request, Response, NextFunction, RequestHandler } from 'express'
import { NotFound } from '../errors'

export const catchAsync = ( handler: RequestHandler ) => 
    ( ...args: [ Request, Response, NextFunction ] ) => 
    // @ts-ignore
    handler ( ... args ).catch( args [ 2 ] )

export const serverError  = ( err: any, req: Request, res: Response, next: NextFunction ) => {

    if ( !err.status ) {

      console.error ( err.stack )

    }
    
    res.status ( err.status || 500 ).json ( { message: err.message || 'Internal Server Error' } )

   } 

export const notFound = ( req: Request, res: Response, next: NextFunction ) => {

    throw new NotFound ()

   }