import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'seller']
  },
  refreshToken: {
    type: String
  },
}, { timestamps: true })

const UserModel = mongoose.model('user', userSchema)

export default UserModel