import { Document, model, Schema } from 'mongoose'

interface User extends Document {
  email?: string,
  firstName?: string,
  LastName?: string
}

export default model<User>('User', new Schema({
  email: String,
  firstName: String,
  LastName: String
}, { timestamps: true }))
