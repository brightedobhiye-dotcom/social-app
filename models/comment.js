const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event', // Links the comment to an Event
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Links the comment to the User who posted it
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500 // Limit the comment size
    },
    isEdited: {
        type: Boolean,
        default: false // Helpful to show users if a comment was modified
    }
}, { timestamps: true, collection: 'comments' })

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment