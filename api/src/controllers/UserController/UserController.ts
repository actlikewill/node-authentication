import express from "express";
import { SimpleRequestHandler } from "../../types/common/interfaces";
import BaseController from "../BaseController/BaseController";
import { Router } from 'express'
import { catchAsync, guest, auth } from '../../middleware'
import { validate, loginSchema } from '../../validation'
import { User } from '../../models'
import { BadRequest } from '../../errors'
import { logIn, logOut } from '../../auth'

class UserControllerClass extends BaseController {
    constructor () {
        super()
    }


    public async login ( req: express.Request , res: express.Response ) {

        await validate ( loginSchema, req.body ) 

        const { email, password } = req.body
    
        const user = await User.findOne ( { email } )
    
        const passwordMatch = await user?.matchesPassword ( password )
    
        if ( ! user || ! passwordMatch ) {
           
            throw new BadRequest ( { status: 400, message: 'Invalid Credentials' } )
    
        }
    
        logIn ( req, user.id ) 
    
        res.json({ message : "login"})
    }

    public async logout ( req: express.Request, res: express.Response ) {

        await logOut ( req, res )

        res.json ( { message: "logout" } )

    }
}

export const UserController = new  UserControllerClass ()

