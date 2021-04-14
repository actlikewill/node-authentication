import { Request, Express } from 'express'
import { Session, SessionData } from 'express-session'


export const logIn = ( req: Request, userId: string ) => { 
    // @ts-ignore
    req.session.userId = userId
}

    // @ts-ignore
export const isLoggedIn = ( req: Request ) => !!req.session.userId
