import  { Document, model, Schema } from 'mongoose'

interface UserDocument extends Document {
    email: string
    name: string
    password: string
}

const userSchema  = new Schema ( { 
        email: String,
        name: String,
        password: String
    },
    {
        timestamps: true
    } 
)

export const User = model ( 'User', userSchema )