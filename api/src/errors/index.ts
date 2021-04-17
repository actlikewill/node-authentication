
interface ErrorOptions {
    status: number
    message: string
}
export class HttpError extends Error {    
    status? : number
    constructor ( { status, message } : ErrorOptions = { status : 500, message: 'Server Error'} )  { 
    super ( message )
    this.status = status
    this.message = message 
   }
}

export class BadRequest extends HttpError {
    constructor ( { status, message } : ErrorOptions = { status: 400, message:'Bad Request'}  ) {
        super ( { status, message  } ) 
    }
}

export class NotFound extends HttpError {
    constructor ( { status, message } : ErrorOptions = { status: 404, message :'Not Found'} ) {
        super ( { status, message} ) 
    }
}