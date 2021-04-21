import express from 'express'

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE' 
}
type SimpleRequestHandler =  ( req: express.Request, res: express.Response, next: express.NextFunction ) => Promise<void>

interface IRoute {
    path: string
    method: Methods
    handler: handler | Promise<void>
    localMiddleware: handler[] 
}

type Person = {
    name: string
    age: number
}