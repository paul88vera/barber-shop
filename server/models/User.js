const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
            // match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlenght: 5
        },
        haircuts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Haircut'
            }
        ]
    }
)

// Above: we might also need virtuals in toJSON, especially if we want to do something like count the # of haircuts a user has in their profile
// Below: we might also need some middleware for dealing with passwords
// for both: see module 21.6 code

const User = model('User', userSchema);

module.exports = User;