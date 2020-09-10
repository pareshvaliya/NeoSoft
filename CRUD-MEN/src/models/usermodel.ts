import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema:mongoose.Schema = new Schema({
    fname:String,
    lname:String,
    email:String,
    pnumber:Number
});

export const UserModel = mongoose.model('student',UserSchema);

// module.exports = User;