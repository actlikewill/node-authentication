import { Request, Response } from 'express'
import { SESSION_NAME } from './config'
 
    // @ts-ignore
export const isLoggedIn = ( req: Request ) => !!req.session.userId

export const logIn = ( req: Request, userId: string ) => { 
    // @ts-ignore
    req.session.userId = userId
}

export const logOut = ( req: Request, res: Response )  => 

    new Promise <void> ( ( resolve, reject ) => {

        req.session!.destroy ( ( err: Error ) => {

            if ( err ) reject ( err )

            res.clearCookie ( SESSION_NAME )

            resolve  ()

        })

     } )


