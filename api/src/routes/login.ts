import { Router } from 'express'
import { catchAsync, guest, auth } from '../middleware'
import { validate, loginSchema } from '../validation'
import { User } from '../models'
import { BadRequest } from '../errors'
import { logIn, logOut } from '../auth'
import { UserController } from '../controllers'


const router = Router ()


router.post ('/login', guest, catchAsync ( UserController.login ) )

router.post ( '/logout', auth, catchAsync ( UserController.logout) )

export default router

class RouteManager {
    
    

}