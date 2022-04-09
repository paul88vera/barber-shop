const { Schema, model } = require('mongoose');

const haircutSchema = new Schema(
    {
        haircutText: {
            type: String,
            // required: 'You need to enter a haircut!',
            minlength: 1,
            maxlength: 30
        }, 
        // Do we need this? If we do, we should add the dateformat helper from module 21 into the util folder and then require it at the top of this page
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     get: timestamp => dateformat(timestamp)
        // },
        username: {
            type: String,
            required: true
        },
        instructions: {
            type: String,
            minlength: 1,
            maxlength: 280
        }
    }
)

// above: 
// below: do we want to add virtuals??

const Haircut = model('Haircut', haircutSchema);

module.exports = Haircut;