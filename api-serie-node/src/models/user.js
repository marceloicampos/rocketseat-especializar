const mongoose = require('../database')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})
// https://www.npmjs.com/package/bcrypt

const User = mongoose.model('User', UserSchema)
// (nome do model, schema do model)
// https://mongoosejs.com/docs/guide.html
module.exports = User
