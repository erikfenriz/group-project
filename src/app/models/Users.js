import mongoose from 'mongoose';
   
const UsersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    storename: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});



const Users = mongoose.models['users'] || mongoose.model('users', UsersSchema);


export default Users;
