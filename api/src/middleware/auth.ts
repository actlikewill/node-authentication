import { Request, Response, NextFunction } from 'express'
import { isLoggedIn } from '../auth'
import { BadRequest } from '../errors'

export const guest = ( req: Request, res: Response, next: NextFunction ) => { 
 
    if ( isLoggedIn ( req ) ) {
        
        return next ( new BadRequest ( { message:'You are already logged in.', status: 400 } ) ) 
    }

    next ()

}

export const auth = ( req: Request, res: Response, next: NextFunction ) => { 
 
    if ( ! isLoggedIn ( req ) ) {
        
        return next ( new BadRequest ( { message:'You must be logged in.', status: 400 } ) ) 
    }

    next ()

}
