
abstract class HttpError extends Error {
    public status!: number
}

export class BadRequest extends HttpError {
    constructor ( message = 'Bad Request' ) {
        super ( message )
        
        this.status = 400
    }
}

export class NotFound extends HttpError {
    constructor ( message = 'Not Found') {
        super ( message )

        this.status = 404
    }
}